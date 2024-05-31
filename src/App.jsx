import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WebBody from './WebBody'
import WebHeader from './WebHeader'
import WebFooter from './WebFooter'


function App() {
  const [count, setCount] = useState(0);
  const data = [
    { hotelname: '金萱飯店', singleRoom: 60, doubleRoom: 66 },
    { hotelname: '晶翠飯店', singleRoom: 40, doubleRoom: 55 },
    { hotelname: '大理飯店', singleRoom: 70, doubleRoom: 65 },
    { hotelname: '星瑩飯店', singleRoom: 65, doubleRoom: 80 },
    { hotelname: '九爻飯店', singleRoom: 34, doubleRoom: 98 },
    { hotelname: '大和飯店', singleRoom: 23, doubleRoom: 60 },
    { hotelname: '可潭飯店', singleRoom: 44, doubleRoom: 75 },
    { hotelname: '翠星飯店', singleRoom: 90, doubleRoom: 120 }
  ];

  const [hoteldata, setHoteldata] = useState(() => {
    return data;
  });

  /*
  const initial_template_orderdata = () => {
    return { hotelname: '', singleRoom: 0, doubleRoom: 0 };
  }
  */

  const [roomDatabase_list, setRoomDatabase_list] = useState([]);
  const [orderDatabase_list, setOrderDatabase_list] = useState([]);
  const [template_orderdatalist, setTemplate_orderdatalist] = useState([]);
  /*
  const set_template_orderdata = (now_orderdata) => {
    setTemplateOrderdata(() => {
      return {
        hotelname: now_orderdata.hotelname,
        singleRoom: now_orderdata.singleRoom,
        doubleRoom: now_orderdata.doubleRoom
      };
    })
  }
  */

  const addRoomdata = (hotel_name, single_room, double_room, single_room_price, double_room_price) => {
    setRoomDatabase_list((preRoomdataBaseList) => {
      return [...preRoomdataBaseList, {
        hotelname: hotel_name, singleRoom: single_room,
        doubleRoom: double_room, singleRoom_price: single_room_price,
        doubleRoom_price: double_room_price, id: uuid()
      }];
    });
  }

  const removeRoomdata = (id) => {
    setRoomDatabase_list(roomDatabase_list => roomDatabase_list.filter(roomData => roomData.id !== id));
  }

  const initialRoomdata = () => {
    setRoomDatabase_list([]);
  }

  const addOrderdata = () => {
    setOrderDatabase_list((preOrderDatabase_list) => {
      return [...preOrderDatabase_list, ...roomDatabase_list];
    });
    setTemplate_orderdatalist(() => {
      return [...roomDatabase_list];
    });
    initialRoomdata();
  }


  const RecalculateHoteldata = () => {
    if (hoteldata.length !== 0 && template_orderdatalist.length !== 0) {
      let recalculate_Hoteldata = [];
      let recalculate_singleroom = 0;
      let recalculate_doubleroom = 0;
      let exist_in_recalculate_Hoteldata = false;
      for (let i = 0; i < template_orderdatalist.length; i++) {
        for (let k = 0; k < hoteldata.length; k++) {
          if (template_orderdatalist[i].hotelname === hoteldata[k].hotelname) {
            recalculate_singleroom = hoteldata[k].singleRoom - template_orderdatalist[i].singleRoom;
            recalculate_doubleroom = hoteldata[k].doubleRoom - template_orderdatalist[i].doubleRoom;
            recalculate_Hoteldata = [...recalculate_Hoteldata,
            {
              hotelname: template_orderdatalist[i].hotelname,
              singleRoom: recalculate_singleroom,
              doubleRoom: recalculate_doubleroom
            }
            ];
          }
        }
      }

      for (let i = 0; i < hoteldata.length; i++) {
        for (let k = 0; k < recalculate_Hoteldata.length && exist_in_recalculate_Hoteldata === false; k++) {
          if (hoteldata[i].hotelname === recalculate_Hoteldata[k].hotelname) {
            exist_in_recalculate_Hoteldata = true;
          }
        }

        if (exist_in_recalculate_Hoteldata === false) {
          recalculate_Hoteldata = [...recalculate_Hoteldata,
          {
            hotelname: hoteldata[i].hotelname,
            singleRoom: hoteldata[i].singleRoom,
            doubleRoom: hoteldata[i].doubleRoom
          }
          ];
        }

        exist_in_recalculate_Hoteldata = false;

      }

      setHoteldata(recalculate_Hoteldata);
      recalculate_Hoteldata = [];
    }
  }



  useEffect(() => {
    if (template_orderdatalist.length !== 0) {
      RecalculateHoteldata();
    }
  }, [template_orderdatalist]);




  return (
    <>
      <WebHeader
        roomDatabase_list={roomDatabase_list}
        removeRoomdata={removeRoomdata}
        orderDatabase_list={orderDatabase_list}
        addOrderdata={addOrderdata}
        RecalculateHoteldata={RecalculateHoteldata}
      />
      <WebBody
        addRoomdata={addRoomdata}
        hoteldata={hoteldata}
      />
      <WebFooter />
    </>
  )
}

export default App
