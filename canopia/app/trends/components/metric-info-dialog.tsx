import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { MetricInfo } from "../types"
import { getMetricIcon, getMetricColor } from "../utils/metric-utils"

interface MetricInfoDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedMetric: string
  metricInfo: Record<string, MetricInfo>
}

export default function MetricInfoDialog({ open, onOpenChange, selectedMetric, metricInfo }: MetricInfoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-[#2B463C] font-montserrat flex items-center">
            {selectedMetric && (
              <>
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
                  style={{ backgroundColor: getMetricColor(selectedMetric) }}
                >
                  {getMetricIcon(selectedMetric)}
                </div>
                {metricInfo[selectedMetric]?.title}
              </>
            )}
          </DialogTitle>
        </DialogHeader>
        {selectedMetric && (
          <div className="py-2 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-[#2B463C] mb-1">Description</h3>
              <p className="text-sm text-[#5F5B52]">{metricInfo[selectedMetric]?.description}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-[#2B463C] mb-1">Échelle de mesure</h3>
              <p className="text-sm text-[#5F5B52]">{metricInfo[selectedMetric]?.scale}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-[#2B463C] mb-1">Facteurs d'influence</h3>
              <ul className="text-sm text-[#5F5B52] list-disc pl-5 space-y-1">
                {metricInfo[selectedMetric]?.factors.map((factor, index) => (
                  <li key={index}>{factor}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-[#2B463C] mb-1">Impact</h3>
              <p className="text-sm text-[#5F5B52]">{metricInfo[selectedMetric]?.impact}</p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

