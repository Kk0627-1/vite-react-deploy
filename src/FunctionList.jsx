import './FunctionList.css'
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HotelShopCar from './HotelShopCar';
import OrderRecordPage from './OrderRecordPage';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function FunctionList({ roomDatabase_list, removeRoomdata, orderDatabase_list,
    addOrderdata, RecalculateHoteldata }) {
    return (
        <div className='functionList-div'>
            <div>
                <h1 className='h1-div'>訂房網站</h1>
            </div>
            <div className='container-div'>
                <div>
                    <Button variant="outlined" >
                        <FavoriteIcon />
                    </Button>
                    <HotelShopCar
                        roomDatabase_list={roomDatabase_list}
                        removeRoomdata={removeRoomdata}
                        addOrderdata={addOrderdata}
                        RecalculateHoteldata={RecalculateHoteldata}
                        orderDatabase_list={orderDatabase_list}
                    />
                    <OrderRecordPage
                        orderDatabase_list={orderDatabase_list}
                    />
                </div>
            </div>
        </div>
    )
}