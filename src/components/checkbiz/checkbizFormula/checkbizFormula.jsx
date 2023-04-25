import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectById, projectUpdated, updateProject } from "../../../features/projectsSlice"
import BIZTOOL_PAGE_CONFIG from "../../../pages/bizTools/pageConfig";

export default function checkbizFormula() {

  const dispatch = useDispatch();
  const selectedProject = useSelector((state) => state.projects.selectedProject);
  const [isLoaded, setIsLoaded] = useState({ user: false, projects: false });
  const [reload, setReload] = useState(false)

  const [newRevenuePerService, setNewRevenuePerService] = useState(null);

  useEffect(() => {

    if (isLoaded.projects) {
      dispatch(fetchProjectById(selectedProject._id));
      setIsLoaded({ user: true, project: true });
    }
    if (!reload) {
      dispatch(fetchProjectById(selectedProject._id));
      setReload(true);
    }
    setModelConfig(selectedProject.model_config);
    setTableRevenueData(selectedProject.revenue);
    setTableExpenseData(selectedProject.expense);
    setTableMiscellaneousData(selectedProject.miscellaneous);
  }, [selectedProject]);

  const [modelConfig, setModelConfig] = useState(
    selectedProject.model_config
  );
  const [tableRevenueData, setTableRevenueData] = useState(
    selectedProject.revenue
  );
  const [tableExpenseData, setTableExpenseData] = useState(
    selectedProject.expense
  );
  const [tableMiscellaneousData, setTableMiscellaneousData] = useState(
    selectedProject.miscellaneous
  );




  function calculateRevenue() {
    const totalRevenue = [];
    const totalRevenue_MIN = [];
    const totalFixedCost_MIN = [];
    let totalValue = 0;
    let totalValue_MIN = 0;

    let sum_product_revenue = 0; //max
    let sum_product_revenue_MIN = 0;

    let sum_service_revenue = 0;
    let sum_service_revenue_MIN = 0;

    tableRevenueData.product_tables.forEach((tableProduct) => {
      tableProduct.products.forEach((eachProduct) => {
        if (eachProduct.revenue_per_unit && typeof eachProduct.revenue_per_unit === "string") {
          if (eachProduct.revenue_per_unit.includes("-")) {
            let [min, max] = eachProduct.revenue_per_unit.split("-").map(Number);
            sum_product_revenue += max
            sum_product_revenue_MIN += min
            console.log("G")
          } else {
            sum_product_revenue += eachProduct.revenue_per_unit
            sum_product_revenue_MIN += eachProduct.revenue_per_unit
          }
        }
      });
    });
    tableRevenueData.service_tables.forEach((tableService) => {
      tableService.services.forEach((eachService) => {

        sum_service_revenue += (eachService.revenue_per_service - (eachService.revenue_per_service * eachService.cost_per_service / 100));
        // if (eachService.revenue_per_service && typeof eachService.revenue_per_service === "string") {
        //   if (eachService.revenue_per_service.includes("-")) {
        //     // let [min, max] = eachProduct.revenue_per_unit.split("-").map(Number);
        //     // sum_product_revenue += max
        //     // sum_product_revenue_MIN += min
        //     console.log("GG")
        //   } else {
        //     sum_service_revenue += eachService.revenue_per_service
        //     sum_service_revenue_MIN += eachService.revenue_per_service
        //   }
        // }

      });
    });

    totalValue = sum_product_revenue + sum_service_revenue
    totalValue_MIN = sum_product_revenue_MIN + sum_service_revenue

    totalRevenue.push(totalValue);
    totalRevenue_MIN.push(totalValue_MIN);

    for (let i = 1; i < modelConfig.projection_period; i++) {
      // totalValue += totalValue*(increase / 100)
      // increase += increase
      totalRevenue.push(totalValue);
      totalRevenue_MIN.push(totalValue_MIN);
    }

    return {
      totalRevenue: totalRevenue,
      totalRevenue_MIN: totalRevenue_MIN
    }
  }



  function calculateTotalFixdcost() {
    const totalFixedCost = [];
    let sum_fixed_cost = 0;
    let sum_investment = 0;
    let increase = 0;
    // modelConfig.projection_period

    tableExpenseData.fixed_cost_tables.forEach((tableFixedCost) => {
      tableFixedCost.fixed_costs.forEach((eachFixedCost) => {
        sum_fixed_cost += eachFixedCost.amount;
        increase = eachFixedCost.cost_increase
      });
    });

    tableExpenseData.investment_tables.forEach((table) => {
      table.investments.forEach((eachData) => {
        sum_investment += eachData.amount
      })
    })

    // ปีแรก
    // totalFixedCost.push(sum_fixed_cost + sum_investment);
    totalFixedCost.push(sum_fixed_cost);

    for (let i = 1; i < modelConfig.projection_period; i++) {
      sum_fixed_cost += sum_fixed_cost * (increase / 100)
      increase += increase
      totalFixedCost.push(sum_fixed_cost);
    }
    return totalFixedCost
  }




  function calculateYearRange() {
    const yearRange = []
    let yearStart = parseInt(modelConfig.start_date.slice(0, 4));
    for (let i = 0; i < modelConfig.projection_period; i++) {
      yearRange.push(yearStart);
      yearStart += 1;
    }
    return yearRange
  }


  function calculateInvestment() {
    const totalInvestment = [0, 0, 0];
    tableExpenseData.investment_tables.map((table) => {
      table.investments.map((eachCost) => {
        totalInvestment += eachCost.amount;
      });
    });
    totalInvestment.unshift(totalInvestment)
  }




  function calculateCFO() {
    const totalCFO = [];
    let sum_fixed_cost = 0;
    let increase = 0;
    let sum_service_revenue = 0;
    let sum_product_revenue = 0;

    tableRevenueData.service_tables.forEach((tableService) => {
      tableService.services.forEach((eachService) => {
        sum_service_revenue += eachService.revenue_per_service;
      });
    });

    tableRevenueData.product_tables.forEach((tableProduct) => {
      tableProduct.products.forEach((eachProduct) => {
        sum_product_revenue += eachProduct.revenue_per_unit;
      });
    });

    tableExpenseData.fixed_cost_tables.map((tableFixedCost) => {
      tableFixedCost.fixed_costs.map((eachFixedCost) => {
        sum_fixed_cost += eachFixedCost.amount;
        increase = eachFixedCost.cost_increase
      });
    });

    totalCFO.push(sum_service_revenue + sum_product_revenue - sum_fixed_cost);

    for (let i = 1; i < modelConfig.projection_period; i++) {
      sum_fixed_cost += sum_fixed_cost * (increase / 100)
      increase += increase
      totalCFO.push(sum_service_revenue + sum_product_revenue - sum_fixed_cost);
    }
    return totalCFO
  }

  function calculateCFI() {
    const totalCFI = [0, 0, 0];
    let sum_investment = 0;
    tableExpenseData.investment_tables.map((table) => {
      table.investments.map((eachData) => {
        sum_investment += eachData.amount
      })
    })
    totalCFI.unshift(-sum_investment);
    return totalCFI
  }

  function calculateCFF() {
    const totalCFF = [];
    let total = 0;
    let increase = 0;
    let sum_debt = 0;
    let sum_equity = 0;

    tableMiscellaneousData.debt_issuance.forEach((table) => {
      table.payments.map((eachData) => {
        totalCFF.push(-eachData.amount);
      })
    });
    return totalCFF
  }

  return {
    calculateInvestment, calculateCFO, calculateCFI, calculateCFF, calculateYearRange,
    calculateRevenue,calculateTotalFixdcost,
  };

}













//  named exports
// export {
//     sum_revenue_service, sum_revenue_product, sum_revenue,
//     sum_fixed_cost, fixed_cost_per_years, revenue_per_years,
//     total_income,
// };
