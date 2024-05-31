import HotelList from "./HotelList"
import './WebBody.css'
import { useState } from "react"
import { v4 as uuid } from 'uuid'

export default function WebBody({ addRoomdata, hoteldata }) {
    /*
    const [roomDatabase_list, setRoomDatabase_list] = useState([]);
    const addRoomdata = (single_room, double_room) => {
        setRoomDatabase_list((preRoomdataBaseList) => {
            return [...preRoomdataBaseList, { singleRoom: single_room, doubleRoom: double_room, id: uuid() }];
        });
    }
    */

    return (
        <div className="webBody-div">
            <HotelList
                addRoomdata={addRoomdata}
                hoteldata={hoteldata}
            />
        </div>
    )


}