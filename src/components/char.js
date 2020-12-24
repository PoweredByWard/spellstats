import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { getChartype } from "../utils/charSelector";

function Char(props) {
    return(
        <HighchartsReact highcharts={Highcharts} options={getChartype(props.type)} />
    )
}

export default Char;