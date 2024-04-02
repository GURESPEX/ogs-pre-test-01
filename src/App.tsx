import ScreenOne from "./ScreenOne";
import ScreenTwo from "./ScreenTwo";

export default function App() {
  return (
    <>
      <div className="flex flex-row gap-16 p-16 justify-center">
        <ScreenOne />
        <ScreenTwo />
      </div>
    </>
  );
}
