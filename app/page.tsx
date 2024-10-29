import TestSampleSearch from "@/components/TestSampleSearch";

export default function Page() {
  return (
    <div className="max-w-xl mx-auto w-full px-2 py-6">
      <p className="text-center">
        Track your test samples with ease using the search bar below.
      </p>

      <TestSampleSearch />
    </div>
  );
}
