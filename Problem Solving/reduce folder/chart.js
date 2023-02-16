import React from "react";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush 
} from 'recharts';

// const data = [
//   {
//     name: "Nov'22", root: 4000, ganesh: 2400, reception: 2600, red: 5630, green:8000
//   },
//   {
//     name: 'Page B', uv: 3000, pv: 1398, amt: 2210, red: 3500,
//   },
//   {
//     name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//   },
//   {
//     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//   },
//   {
//     name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//   },
//   {
//     name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//   },
//   {
//     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//   },
// ];
// let arr =[
//   {
//       Month: "Dec'22",
//       Doctor_Name: "SIS Saksh Ganesh (Reception)",
//       Visit_Count: 3
//   },
//   {
//       Month: "Dec'22",
//       Doctor_Name: "SIS Saksh Ganesh (Doctor)",
//       Visit_Count: 3
//   },
//   {
//     Month: "Dec'22",
//     Doctor_Name: "SIS Saksh Ganesh (Billing)",
//     Visit_Count: 1
// },
  
//   {
//       Month: "Nov'22",
//       Doctor_Name: "SIS Saksh Ganesh (Doctor)",
//       Visit_Count: 3
//   },
 
//   {
//       Month: "Nov'22",
//       Doctor_Name: "SIS Saksh Ganesh (Reception)",
//       Visit_Count: 2
//   },
//   {
//     Month: "Oct'22",
//     Doctor_Name: "SIS Saksh Ganesh (Reception)",
//     Visit_Count: 2
// },
  

// ]
// const data = arr.reduce((acc, obj) => {
//   let found = false;

//   const sliced = Object.keys(obj).slice(0, 1).reduce((result, key) => {
//       result[key] = obj[key];

//       return result;
//   }, {});

// console.log(sliced);
//   for (let i = 0; i < acc.length; i++) {
//      if (acc[i].Month === obj.Month) {
//         found = true;
//         acc[i][obj.Doctor_Name] = obj.Visit_Count
//       //   acc[i].count++;
     
//      };
//   }
//   if (!found) {
//   //    obj.count = 1;
//      acc.push({...sliced,[obj.Doctor_Name] : obj.Visit_Count });

//   }
//   return acc;
// }, []);

// const data = [
//   {Month: "Nov'22",  'SIS Saksh Ganesh (Doctor)': 3,'SIS Saksh Ganesh (Billing)': 1 ,'SIS Saksh Ganesh (Reception)': 3},
//   {Month: "Dec'22", 'SIS Saksh Ganesh (Reception)': 3, 'SIS Saksh Ganesh (Doctor)': 3}
// ]

const color = ["#8884d8", "#82ca9d", "orange", "pink"]



function MyBarChart(props) {
  const {stacked, data} = props;

  console.log('dataaaaaa', data)

  const getBar = () => {
    const keysArr = Object.keys(data[0]).slice(1);
    const barArr= [];
    keysArr.forEach((item, index)=> {
     
      console.log('item',item)
      barArr.push(<Bar dataKey={item} stackId={stacked ? "a" : null} fill={color[index]} />)
    })
    return barArr;
  }

 const  modifyFormatter = (value, name, props) => {
    // console.log(value, name , props, "props");
    const nameJSX = <span><span style={{
      display: "inline-block",
      marginRight: "5px",
      borderRadius: "10px",
      width: "10px",
      height: "10px",
      backgroundColor: props.color
    }}></span>{name} : {value}</span>;
    let result = [nameJSX].reverse();
    // console.log(result, "result");
    return result;
  }

 const  handleSort = (item1, item2) => {
    // console.log(item1, item2);
    return 1;
  }

console.log('Object.keys(data[0])[0]',Object.keys(data[0])[0])
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}/>
        <XAxis dataKey={Object.keys(data[0])[0]} />
        <YAxis />
        <Tooltip formatter={modifyFormatter} itemSorter={handleSort}/>
        <Legend />
        {getBar()}
        <Brush dataKey={Object.keys(data[0])[0]}>
          <BarChart>
            {getBar()}
          </BarChart>
        </Brush>
      </BarChart>
    );
  
}
export default MyBarChart