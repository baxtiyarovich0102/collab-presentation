import Controls from "../components/Controls";
import SlideEditor from "../components/SlideEditor";
import SlideList from "../components/SlideList";
import SlidePreview from "../components/SlidePreview";
import { SlideProvider } from "../context/SlideProvider";

const Presentation = () => {
  return (
    <SlideProvider>
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        <h1 className="text-3xl font-bold text-center mb-6">🎤 Presentation Editor</h1>
        <Controls />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <SlideList />
            <SlideEditor />
          </div>
          <SlidePreview />
        </div>
      </div>
    </SlideProvider>
  );
};

export default Presentation;
