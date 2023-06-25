import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Root } from "./routes/Root";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Workspace } from "./pages/Workspace";
import { Document } from "./pages/Document";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { VerifyOTP } from "./pages/VerifyOTP";
import { VerifyForgotPassword } from "./pages/VerifyFogotPassword";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetForgotPassword } from "./pages/ResetForgotPassword";
import { CreateDocument } from "./pages/CreateDocument";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUS";
import { NotFound } from "./pages/NotFound";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { EnableAccount } from "./pages/EnableAccount";
import { VerifyToEnable } from "./pages/VerifyToEnable";
import { DocumentHistoryView } from "./pages/DocumentHistoryView";

function App() {
  return (
    <div className="App font-ssp bg-white">
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/forgotpassword"
          element={
            <ProtectedRoute>
              <ForgotPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/verifyforgotpassword"
          element={
            <ProtectedRoute>
              <VerifyForgotPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resetforgotpassword"
          element={
            <ProtectedRoute>
              <ResetForgotPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/enableaccount"
          element={
            <ProtectedRoute>
              <EnableAccount />
            </ProtectedRoute>
          }
        />
        <Route
          path="/verifyenableaccount"
          element={
            <ProtectedRoute>
              <VerifyToEnable />
            </ProtectedRoute>
          }
        />

        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/verifyotp"
          element={
            <ProtectedRoute>
              <VerifyOTP />
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<Root />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/workspace"
            element={
              <ProtectedRoute>
                <Workspace />
              </ProtectedRoute>
            }
          />
          <Route
            path="/document/:workspaceId"
            element={
              <ProtectedRoute>
                <Document />
              </ProtectedRoute>
            }
          />
          <Route
            path="/createdocument/:documentId/:workspaceId"
            element={
              <ProtectedRoute>
                <CreateDocument />
              </ProtectedRoute>
            }
          />
          <Route
            path="/document/history"
            element={
              <ProtectedRoute>
                <DocumentHistoryView />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
