import React, { useEffect, useState } from "react";
import "../statement.css";
import CHECKBIZ_CONFIG from "../../checkbiz/checkbizData/checkbizConfig";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjectById,
  projectUpdated,
  updateProject,
} from "../../../features/projectsSlice";


const incomeDocument = () => {
  const yearRange = [2565, 2566, 2567, 2568];
  const inittialIncomeData = CHECKBIZ_CONFIG.income

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
    setTableRevenueData(selectedProject.revenue);
    setTableExpenseData(selectedProject.expense);
    setTableModelConfigData(selectedProject.model_config);
  }, [selectedProject]);

  const [tableRevenueData, setTableRevenueData] = useState(
    selectedProject.revenue
  );
  const [tableExpenseData, setTableExpenseData] = useState(
    selectedProject.expense
  );
  const [tableModelConfigData, setTableModelConfigData] = useState(
    selectedProject.expense
  );
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
    let sum_product_revenue = 0;
    let sum_service_revenue = 0;
    tableRevenueData.product_tables.forEach((tableProduct) => {
      tableProduct.products.forEach((eachProduct) => {
        sum_product_revenue += eachProduct.revenue_per_unit;
      });
      tableRevenueData.service_tables.forEach((tableService) => {
        tableService.services.forEach((eachService) => {
          sum_service_revenue += eachService.revenue_per_service;
        });
      });
    });
    totalValue = sum_product_revenue + sum_service_revenue
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
  
  return (
    <div className="">
      <div>
        {/* <div className="dov-head-cell">โครงการ A</div> */}
        <div className="dov-head-cell">งบกำไรขาดทุน</div>
        <div className="dov-name-cell mb-2">การประมาณการในช่วง ปี 2565 - 2568</div>
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
            {/* {inittialIncomeData.list.map((item, i) => (
            <>
              <tr>
                <th>{item.name}</th>
                {item.total.map((d) => (
                  <td>{d}</td>
                ))}
              </tr>

              {item.data.map((d) => (
                <tr>
                  <td>{d.name}</td>
                  {d.val.map((dd) => (
                    <td>{dd}</td>
                  ))}
                </tr>
              ))}
            </>
          ))} */}


            <th className="dov-name-cell">รายได้จากการขายสินค้าและบริการ</th>
            {tableRevenueData.service_tables.map((table) => (
              <React.Fragment key={table._id}>
                {table.services.map((each) => (
                  <tr key={each._id}>
                    <td className="dov-name-cell">{each.name}</td>
                    {yearRange.map((i) => (
                      <td scope="col" className="dov-money-cell">{each.revenue_per_service.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}

            <tr>
              <td scope="row" className="dov-border-cell">รวมรายได้</td>
              {yearRange.map((i) => (
                <td scope="col" className="dov-money-cell-b">{calculateRevenue().toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              ))}
            </tr>
  
            <th className="dov-name-cell">รายจ่ายจากต้นทุนขายและบริการ</th>
            {tableRevenueData.product_tables.map((table) => (
              <React.Fragment key={table._id}>
                {table.products.map((each) => (
                  <tr key={each._id}>
                    <td className="dov-name-cell">{each.name}</td>
                    {yearRange.map((i) => (
                      <td scope="col" className="dov-money-cell">{each.revenue_per_unit.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
            {tableExpenseData.fixed_cost_tables.map((tableFixedCost) => (
              <React.Fragment key={tableFixedCost._id}>
                {tableFixedCost.fixed_costs.map((eachFixedCost) => (
                  <tr key={eachFixedCost._id}>
                    <td className="dov-name-cell">{eachFixedCost.name}</td>
                    {yearRange.map((i) => (
                      <td scope="col" className="dov-money-cell">{eachFixedCost.amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}

            <tr>
              <td scope="row" className="dov-border-cell">รวมรายจ่าย</td>
              {yearRange.map((i) => (
                <td scope="col" className="dov-money-cell-b">{calculateFixedCost().toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              ))}
            </tr>
            <tr>
              <td scope="column" className="dov-border-cell">กำไรก่อนภาษีเงินได้</td>
              {yearRange.map((i) => (
                <td scope="col" className="dov-money-cell-b">{(calculateRevenue() - calculateFixedCost()).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              ))}
            </tr>
            <tr>
              <td scope="column" className="dov-border-cell">ค่าใช้จ่ายภาษีเงินได้</td>
              {yearRange.map((i) => (
                <td scope="col" className="dov-money-cell-b">0</td>
              ))}
            </tr>

            <tr>
              <td scope="column" className="dov-border-cell">กำไรสุทธิ</td>
              {yearRange.map((i) => (
                <td scope="col" className="dov-money-cell-b">{(calculateRevenue() - calculateFixedCost()).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default incomeDocument;
