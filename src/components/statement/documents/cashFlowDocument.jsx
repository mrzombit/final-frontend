import React, { useEffect, useState } from "react";
import "../statement.css";
import CHECKBIZ_CONFIG from "../../checkbiz/checkbizData/checkbizConfig";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjectById,
  projectUpdated,
  updateProject,
} from "../../../features/projectsSlice";


const cashFlowDocument = () => {
  const yearRange = [2565, 2566, 2567, 2568];

  const inittialCashFlowData = CHECKBIZ_CONFIG.cashflow

  let totalInvestment = 0;
  let totalRevenue = [];
  let totalfixedCost = [];
  const totalCFO = [];
  const totalCFI = [0, 0, 0];
  const totalCFF = [];
  let mock = [1000, 1000, 1000, 1000]

  const dispatch = useDispatch();
  const selectedProject = useSelector(
    (state) => state.projects.selectedProject
  );
  const [isLoaded, setIsLoaded] = useState({ user: false, projects: false });
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (isLoaded.projects) {
      dispatch(fetchProjectById(selectedProject._id));
      setIsLoaded({ user: true, project: true });
    }
    if (!reload) {
      dispatch(fetchProjectById(selectedProject._id));
      setReload(true);
    }
    setprojectName(selectedProject.name)
    setModelConfig(selectedProject.model_config);
    setTableRevenueData(selectedProject.revenue);
    setTableExpenseData(selectedProject.expense);
    setTableMiscellaneousData(selectedProject.miscellaneous);
  }, [selectedProject]);

  const [projectName, setprojectName] = useState(
    selectedProject.name
  );
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


  function calculateInitialInvestment() {
    let total = 0
    tableExpenseData.investment_tables.forEach((table) => {
      table.investments.forEach((eachCost) => {
        total += eachCost.amount;
      });
      totalInvestment.unshift(total)
    });


  }
  function calculateCashFlows(initialInvestment, annualGrowthRate, numberOfYears) {
    let cashFlows = [];
    let currentCashFlow = initialInvestment;

    for (let i = 0; i < numberOfYears; i++) {
      cashFlows.push(currentCashFlow);
      currentCashFlow = currentCashFlow * (1 + annualGrowthRate);
    }

    return cashFlows;
  }


  function calculateRevenue_service() {
    let sum_service_revenue = 0;
    tableRevenueData.service_tables.forEach((tableService) => {
      tableService.services.forEach((eachService) => {
        sum_service_revenue += eachService.revenue_per_service;
      });
    });
    return sum_service_revenue;
  }
  function calculateRevenue_product() {
    let sum_product_revenue = 0;
    tableRevenueData.product_tables.forEach((tableProduct) => {
      tableProduct.products.forEach((eachProduct) => {
        sum_product_revenue += eachProduct.revenue_per_unit;
      });
    });
    return sum_product_revenue;
  }

  function calculateRevenue() {
    let totalValue = 0;
    totalValue = calculateRevenue_service() + calculateRevenue_product();
    totalRevenue.push(totalValue);
    return totalValue;
  }

  function calculateFixedCost() {
    let sum_fixed_cost = 0;
    tableExpenseData.fixed_cost_tables.forEach((tableFixedCost) => {
      tableFixedCost.fixed_costs.forEach((eachFixedCost) => {
        sum_fixed_cost += eachFixedCost.amount;
      });
    });
    return sum_fixed_cost;
  }

  function calculateTotalFixdcost() {
    let totalValue = 0;
    totalValue = calculateFixedCost();
    totalfixedCost.push(totalValue);
    return totalValue
  }

  function calculateCFO() {
    let result = 0
    result = calculateRevenue() - calculateFixedCost();
    return result
  }

  function calculateCFI() {
    let result = 0
    return result
  }

  function calculateCFF() {
    let result = 0
    return result
  }

  function netCashflow() {
    let result = 0
    result = calculateCFO() + calculateCFI() + calculateCFF()
    return result
  }
  ///////////////////////////////////////////////////
  function total_CFO() {
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



    // ปีแรก
    // totalFixedCost.push(sum_fixed_cost + sum_investment);
    totalCFO.push(sum_service_revenue + sum_product_revenue - sum_fixed_cost);

    for (let i = 1; i < modelConfig.projection_period; i++) {
      sum_fixed_cost += sum_fixed_cost * (increase / 100)
      increase += increase
      totalCFO.push(sum_service_revenue + sum_product_revenue - sum_fixed_cost);
    }
    // return sum_fixed_cost
  }
  function total_CFI() {
    let sum_investment = 0;
    tableExpenseData.investment_tables.map((table) => {
      table.investments.map((eachData) => {
        sum_investment += eachData.amount
      })
    })
    totalCFI.unshift(-sum_investment);

  }
  function total_CFF() {
    let total = 0;
    let increase = 0;
    let sum_debt = 0;
    let sum_equity = 0;

    tableMiscellaneousData.debt_issuance.forEach((table) => {
      table.payments.map((eachData) => {
        //year?
        // sum_debt += eachData.amount;
        totalCFF.push(-eachData.amount);
      })
    });

    // tableMiscellaneousData.equity_contribution.forEach((table) => {
    //   sum_equity += table.amount;
    // });



    // for (let i = 1; i < modelConfig.projection_period; i++) {
    //   totalCFF.push(sum_equity - sum_debt);
    // }

  }

  //////////////////////////////////////////// FFC 5

  function calculateInitialInvestment() {
    tableExpenseData.investment_tables.forEach((table) => {
      table.investments.forEach((eachCost) => {
        totalInvestment += eachCost.amount;
      });
    });
  }



  function calculateCashFlows(initialInvestment, annualGrowthRate, numberOfYears) {
    let cashFlows = [];
    let currentCashFlow = initialInvestment;

    for (let i = 0; i < numberOfYears; i++) {
      cashFlows.push(currentCashFlow);
      currentCashFlow = currentCashFlow * (1 + annualGrowthRate);
    }

    return cashFlows;
  }

  function calculateNPV(initialInvestment, cashFlows, discountRate) {
    let presentValueOfCashFlows = 0
    for (let i = 0; i < cashFlows.length; i++) {
      presentValueOfCashFlows += cashFlows[i] / Math.pow((1 + discountRate), i + 1)
    }
    const netPresentValue = presentValueOfCashFlows - initialInvestment
    console.log(`NPV : ${initialInvestment} ,[ ${cashFlows} ], ${discountRate}`)

    return netPresentValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  }

  // const math = create(all)

  function calculateIRR(cashFlows) {
    const math = require('mathjs');

    const irr = math.finance.IRR(cashFlows);

    return irr.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  }



  function calculatePaybackPeriod(initialInvestment, cashFlows) {
    let cumulativeCashFlow = -initialInvestment // Add the initial investment as a negative cash flow
    let paybackPeriod = 0

    for (let i = 0; i < cashFlows.length; i++) {
      cumulativeCashFlow += cashFlows[i]
      if (cumulativeCashFlow >= 0) {
        paybackPeriod += i + (cumulativeCashFlow - cashFlows[i]) / cashFlows[i + 1]
        break
      }
    }

    return paybackPeriod.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  }

  function calculateProfitabilityIndex(initialInvestment, cashFlows, discountRate) {
    let presentValueOfCashFlows = 0
    for (let i = 0; i < cashFlows.length; i++) {
      presentValueOfCashFlows += cashFlows[i] / Math.pow((1 + discountRate), i + 1)
    }
    const netPresentValue = presentValueOfCashFlows - initialInvestment
    const profitabilityIndex = netPresentValue / initialInvestment
    return profitabilityIndex.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  }



  return (
    <div className="">
      <div>
        <div className="dov-head-cell mb-3">บริษัท {projectName}</div>
        <div className="dov-head-cell">งบกระแสเงินสด</div>
        <div className="dov-name-cell">การประมาณการในช่วง ปี 2565 - 2568</div>
        <div className="biz-water-mask">create by BIZCHECK</div>
        <table className="table container table-hover">
          <thead>
            <tr className="table">
              <th scope="col" className="dov-name-cell">รายการ</th>
              {yearRange.map((i) => (
                <th scope="col" className="dov-money-cell">{i}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            <th className="dov-name-cell">กระแสเงินสดจากกิจกรรมดำเนินงาน</th>
            {/* <div>{total_income()}</div>
            <div>{total_CFO()}</div>
            <div>{total_CFI()}</div>
            <div>{total_CFF()}</div> */}
            <tr>
              <td className="dov-name-cell">ต้นทุนทางการเงิน</td>
              {yearRange.map((i) => (
                <td scope="col" className="dov-money-cell">{calculateFixedCost().toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              ))}
            </tr>
            <tr>
              <td className="dov-name-cell">รายได้ทางการเงิน</td>
              {yearRange.map((i) => (
                <td scope="col" className="dov-money-cell">{calculateRevenue().toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              ))}
            </tr>
            <th className="dov-name-cell">กระแสเงินสดจากกิจกรรมลงทุน</th>
            <tr>
              <td className="dov-name-cell">ค่าใช้จ่ายการลงทุน</td>
              {calculateInitialInvestment()}
              {yearRange.map((i) => (
                <td scope="col" className="dov-money-cell">{totalInvestment.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              ))}
            </tr>
            <th className="dov-name-cell">กระแสเงินสดจากกิจกรรมจัดหาเงิน</th>
            <tr>
              <td className="dov-name-cell">เงินสดรับจากการกู้ยืม</td>
              {(calculateCashFlows(totalInvestment, 0.7, 4)).map(eachYear => (
                // yearRange.map((i) => (
                <td scope="col" className="dov-money-cell">{eachYear.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                // ))
              ))}
            </tr>
            <tr>
              <td className="dov-name-cell">เงินสดจ่ายจากการชำระเงินกู้</td>
              {(calculateCashFlows(totalInvestment, 0.7, 4)).map(eachYear => (
                // yearRange.map((i) => (
                <td scope="col" className="dov-money-cell">{eachYear.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                // ))
              ))}
            </tr>
            {/* <tr>
              <td className="dov-name-cell">เงินสดจ่ายจากเงินปันผล</td>
              {(calculateCashFlows(totalInvestment, 0.7, 4)).map(eachYear => (
                // yearRange.map((i) => (
                <td scope="col" className="dov-money-cell">{eachYear.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                // ))
              ))}
            </tr> */}
            <tr>
              <th className="dov-name-cell">กระแสเงินสดสุทธิ</th>
              {(calculateCashFlows(totalInvestment, 0.7, 4)).map(eachYear => (
                // yearRange.map((i) => (
                <th scope="col" className="dov-money-cell">{eachYear.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
                // ))
              ))}
            </tr>


          </tbody>

        </table>
      </div>

    </div>
  );
};

export default cashFlowDocument;
