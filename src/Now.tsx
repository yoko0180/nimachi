import { format, parseISO } from "date-fns"
import { useEffect, useState } from "react"
import { ja } from "date-fns/locale"
export const Now: React.FC<{}> = ({}) => {
  const _format = (time: Date, formatStyle: string) => {
    if (!time) return ""
    if (typeof time === "string") time = parseISO(time)
    try {
      return format(time, formatStyle, { locale: ja })
    } catch (error) {
      console.error("df.format error", error)
      return ""
    }
  }

  const [now, setNow] = useState(new Date())
  useEffect(() => {
    let timeoutId: number
    const updateNow = () => {
      setNow(new Date())
      timeoutId = setTimeout(updateNow, 1000)
    }
    updateNow()
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div id="now" className="w-full select-none m-0 p-0">
      <div className="mt-8">
        <div className="date" style={{ fontSize: "6vmin" }}>
          {_format(now, "yyyy/MM/dd eee")}
        </div>
        <div className="time text-center" style={{ fontSize: "20vmin" }}>
          {_format(now, "HH:mm:ss")}
        </div>
      </div>
    </div>
  )
}
