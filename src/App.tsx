import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import DBTest1 from "./pages/.test/dbTest1";

import MainSidebar from "./components/common/mainSidebar/mainSidebar";
import ProfilePage from "./pages/profilePage/profilePage";
import AccountPage from "./pages/accountPage/accountPage";
import LandingPage from "./pages/landingPage/landingPage";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";
import SubscriptionPage from "./pages/subscriptionPage/subscriptionPage";
import WorkSpacePage from "./pages/workSpacePage/workSpacePage";
import ComparePage from "./pages/comparePage/comparePage";
import MiscellaneousPage from "./pages/bizTools/miscellaneousPage/miscellaneousPage";
import OperationCostPage from "./pages/bizTools/operationCostPage/operationCostPage";
import TotalInvestmentPage from "./pages/bizTools/totalInvestmentPage/totalInvestmentPage";
import RevenuePage from "./pages/bizTools/revenuePage/revenuePage";
import FFCPage from "./pages/checkBiz/ffcPage/ffcPage";
import StatementsPage from "./pages/checkBiz/statementsPage/statementsPage";
import CashFlowStatement from "./pages/checkBiz/statementsPage/cashFlowStatementPage";
import SensitivityCashflow from "./components/sensitivity/sensitivityCashflow";
import SensitivityIncome from "./components/sensitivity/sensitivityIncome";
import CashflowChartPage from "./pages/checkBiz/statementsPage/chartPages/cashflowChartPage";
import IncomeChartPage from "./pages/checkBiz/statementsPage/chartPages/incomeChartPage";
import ProfitLossStatement from "./pages/checkBiz/statementsPage/profitLossStatement";
import CustomStatementPage from "./pages/checkBiz/statementsPage/customStatementPage";
import ProjectConfigPage from "./pages/bizTools/projectConfigPage/projectConfigPage";
import { useDispatch, useSelector } from "react-redux";
import store from "./app/store";
import PleaseLogin from "./pages/landingPage/pleaseLogin";
import { fetchAssetAccounts } from "./features/assetAccountsSlice";
import { fetchBusinessGoals } from "./features/businessGoalsSlice";
import { fetchCurrencies } from "./features/currenciesSlice";
import { fetchIndustries } from "./features/industriesSlice";
import { fetchPeriods } from "./features/periodsSlice";
import { fetchSubscriptionPlans } from "./features/substriptionPlansSlice";
import { fetchProjectTemplates } from "./features/projectTemplatesSlice";
import CreateNewProject from "./pages/createNewProjectPage/createNewProject";

function App() {
  type RootState = ReturnType<typeof store.getState>;
  const dispatch = useDispatch<typeof store.dispatch>();
  const isLoggedIn = useSelector<RootState, boolean>(
    (state) => state.users.auth.isLoggedIn
  );

  useEffect(() => {
    dispatch(fetchAssetAccounts());
    dispatch(fetchBusinessGoals());
    dispatch(fetchCurrencies());
    dispatch(fetchIndustries());
    dispatch(fetchPeriods());
    dispatch(fetchProjectTemplates());
    dispatch(fetchSubscriptionPlans());
  }, []);

  return (
    <Router>
      <div className="root-style">
        <MainSidebar />
        <div>
          {isLoggedIn ? (
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/subscription" element={<SubscriptionPage />} />
              <Route path="/workSpace" element={<WorkSpacePage />} />
              <Route path="/createProject" element={<CreateNewProject />} />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="/projectConfig" element={<ProjectConfigPage />} />
              <Route path="/totalInvestment" element={<TotalInvestmentPage />} />
              <Route path="/operationCost" element={<OperationCostPage />} />
              <Route path="/revenue" element={<RevenuePage />} />
              <Route path="/miscellaneous" element={<MiscellaneousPage />} />
              <Route path="/ffc" element={<FFCPage />} />
              <Route path="/statements" element={<StatementsPage/>} />
              <Route path="/customStatements" element={<CustomStatementPage />} />
              <Route path="/cashFlowStatements" element={<CashFlowStatement />} />
              <Route path="/profitLossStatements" element={<ProfitLossStatement />}/>
              <Route path="/sensitivity/cashflow" element={<SensitivityCashflow />}/>
              <Route path="/sensitivity/income" element={<SensitivityIncome />}/>
              <Route path="/chart/cashflow" element={<CashflowChartPage />} />
              <Route path="/chart/income" element={<IncomeChartPage />} />

              <Route path="*" element={<LandingPage />} />
              {/* <Route path="/NewInvestmentProject" element={<NewInvestmentProject />} /> */}
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/workSpace" element={<WorkSpacePage />} />
              <Route path="*" element={<PleaseLogin />} />
              <Route path="/test" element={<DBTest1 />} />
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
