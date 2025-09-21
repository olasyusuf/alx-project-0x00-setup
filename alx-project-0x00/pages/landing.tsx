import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-100">
      <h1 className="text-2xl font-bold">Landing Page - Button Variants</h1>

      {/* Small Buttons */}
      <div className="flex gap-4">
        <Button title="Small Rounded-sm" styles="text-sm rounded-sm bg-blue-500 text-white" />
        <Button title="Small Rounded-md" styles="text-sm rounded-md bg-blue-500 text-white" />
        <Button title="Small Rounded-lg" styles="text-sm rounded-lg bg-blue-500 text-white" />
        <Button title="Small Rounded-full" styles="text-sm rounded-full bg-blue-500 text-white" />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-4">
        <Button title="Medium Rounded-sm" styles="text-base rounded-sm bg-green-500 text-white" />
        <Button title="Medium Rounded-md" styles="text-base rounded-md bg-green-500 text-white" />
        <Button title="Medium Rounded-lg" styles="text-base rounded-lg bg-green-500 text-white" />
        <Button title="Medium Rounded-full" styles="text-base rounded-full bg-green-500 text-white" />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-4">
        <Button title="Large Rounded-sm" styles="text-lg px-6 py-3 rounded-sm bg-purple-500 text-white" />
        <Button title="Large Rounded-md" styles="text-lg px-6 py-3 rounded-md bg-purple-500 text-white" />
        <Button title="Large Rounded-lg" styles="text-lg px-6 py-3 rounded-lg bg-purple-500 text-white" />
        <Button title="Large Rounded-full" styles="text-lg px-6 py-3 rounded-full bg-purple-500 text-white" />
      </div>
    </div>
  );
}
export default Landing