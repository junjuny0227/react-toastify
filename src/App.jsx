import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const handleSuccess = () => toast.success("성공!");
  const handleError = () => toast.error("에러 발생!");
  const handleInfo = () => toast.info("정보 메시지");
  const handleWarning = () => toast.warning("경고!");

  return (
    <div>
      <button onClick={handleSuccess}>성공</button>
      <button onClick={handleError}>에러</button>
      <button onClick={handleInfo}>정보</button>
      <button onClick={handleWarning}>경고</button>
      <ToastContainer />
    </div>
  );
};

export default App;
