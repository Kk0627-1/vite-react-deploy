import './WebHeader.css'
import FunctionList from './FunctionList'

export default function WebHeader({ roomDatabase_list, removeRoomdata, orderDatabase_list,
    addOrderdata, RecalculateHoteldata }) {
    return (
        <div className="header">
            <FunctionList
                roomDatabase_list={roomDatabase_list}
                removeRoomdata={removeRoomdata}
                orderDatabase_list={orderDatabase_list}
                addOrderdata={addOrderdata}
                RecalculateHoteldata={RecalculateHoteldata}
            />
        </div>
    )
}