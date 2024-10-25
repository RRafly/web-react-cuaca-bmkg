import { ReactElement } from "react"

interface Props {
    title: string,
    optionList: ReactElement[] | undefined
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

function WilayahSelect({title, onChange, optionList}: Props)  {
    return (
        <>
            <label>{title}<br /></label>
            <select className="block w-full py-2 px-2 border rounded border-slate-300" onChange={onChange}>
                <option value={["default"]}>-- Pilih --</option>
                {optionList}
            </select>
        </>
    )
}

export default WilayahSelect