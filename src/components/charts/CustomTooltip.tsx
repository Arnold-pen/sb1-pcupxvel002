interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  showProcessor?: boolean;
}

export default function CustomTooltip({ active, payload, label, showProcessor = false }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white/60 dark:bg-gray-800/60 p-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-sm backdrop-blur-sm">
        {showProcessor ? (
          <>
            <p className="font-medium text-gray-900 dark:text-gray-100">{data.processor}</p>
            <p className="text-blue-600 dark:text-blue-400">
              {payload[0].value.toLocaleString()} points ({data.year})
            </p>
          </>
        ) : (
          <p className="text-blue-600 dark:text-blue-400">
            {payload[0].value.toLocaleString()} points ({data.year})
          </p>
        )}
      </div>
    );
  }
  return null;
}