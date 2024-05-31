import { useState } from "react"
import HotelItem from "./HotelItem";
import './HotelList.css'


export default function HotelList({ addRoomdata, hoteldata }) {
    const findHotel = (hotelname) => {
        for (let i = 0; i < hoteldata.length; i++) {
            if (hoteldata[i].hotelname === hotelname) {
                return hoteldata[i];
            }
        }
    }

    const [shoppingList, setShoppinglist] = useState([]);

    return (
        <div className="hotelList-div">
            <HotelItem
                imgName={'img1'}
                hotelname={'金萱飯店'}
                rank={3}
                singleprice={1000}
                doubleprice={1500}
                singleRoom={findHotel('金萱飯店').singleRoom}
                doubleRoom={findHotel('金萱飯店').doubleRoom}
                addRoomdata={addRoomdata}
            />
            <HotelItem
                imgName={'img2'}
                hotelname={'晶翠飯店'}
                rank={2}
                singleprice={650}
                doubleprice={1300}
                singleRoom={findHotel('晶翠飯店').singleRoom}
                doubleRoom={findHotel('晶翠飯店').doubleRoom}
                addRoomdata={addRoomdata}
            />
            <HotelItem
                imgName={'img3'}
                hotelname={'大理飯店'}
                rank={4}
                singleprice={1200}
                doubleprice={2400}
                singleRoom={findHotel('大理飯店').singleRoom}
                doubleRoom={findHotel('大理飯店').doubleRoom}
                addRoomdata={addRoomdata}
            />
            <HotelItem
                imgName={'img4'}
                hotelname={'星瑩飯店'}
                rank={5}
                singleprice={750}
                doubleprice={1500}
                singleRoom={findHotel('星瑩飯店').singleRoom}
                doubleRoom={findHotel('星瑩飯店').doubleRoom}
                addRoomdata={addRoomdata}
            />
            <HotelItem
                imgName={'img5'}
                hotelname={'九爻飯店'}
                rank={4}
                singleprice={840}
                doubleprice={1300}
                singleRoom={findHotel('九爻飯店').singleRoom}
                doubleRoom={findHotel('九爻飯店').doubleRoom}
                addRoomdata={addRoomdata}
            />
            <HotelItem
                imgName={'img6'}
                hotelname={'大和飯店'}
                rank={3}
                singleprice={900}
                doubleprice={1600}
                singleRoom={findHotel('大和飯店').singleRoom}
                doubleRoom={findHotel('大和飯店').doubleRoom}
                addRoomdata={addRoomdata}
            />
            <HotelItem
                imgName={'img7'}
                hotelname={'可潭飯店'}
                rank={2}
                singleprice={450}
                doubleprice={900}
                singleRoom={findHotel('可潭飯店').singleRoom}
                doubleRoom={findHotel('可潭飯店').doubleRoom}
                addRoomdata={addRoomdata}
            />
            <HotelItem
                imgName={'img8'}
                hotelname={'翠星飯店'}
                rank={4}
                singleprice={700}
                doubleprice={1100}
                singleRoom={findHotel('翠星飯店').singleRoom}
                doubleRoom={findHotel('翠星飯店').doubleRoom}
                addRoomdata={addRoomdata}
            />
        </div>
    )
}