import React,{useState, useContext}  from 'react';
import { Icon } from 'react-native-elements';
import Apikey from "../../database/apiKey";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { AuthContext } from "../../routes/authProvider";
import Header from '../../shared/header';
import TimeTable from '@mikezzb/react-native-timetable';
//import Coursescheduler from "../../screens/schedulerPage/courseScheduler";
import { StyleSheet, 
    Text, 
    View, 
    ScrollView,
    FlatList, 
    TouchableOpacity,
    LogBox,
    Alert, 
    StatusBar,
 
   
  } from 'react-native';

  if (!firebase.apps.length) { firebase.initializeApp(Apikey.firebaseConfig); }

  const db = firebase.firestore();
  LogBox.ignoreLogs(['Setting a timer for a long period of time'])

  export default function Mycourse({navigation, route}){

    const { user, Logout, profile } = useContext(AuthContext);
    const [data,setData] =useState(courseData)
    const courseData=[
      {
        id:1,
        Course_code: "GIG1005",
        courseId: "GIG1005",
        Lecture_group: "-",
        Tutorial_group: "WIC",
        Course_name: "The Islamic and Asian Civilization",
        Course_explanation: "heellloo",
        Credit_hour: 2,
        Lecturer_name: "PLY",
        Department: "Computer System and Network",
        Semester: 1,
        Year: "2020/2021",
        Time: "Thursday, 9-11am",
        startTime: '9:00',
        endTime: '11:00',
        day: 4,
        Place: "Online",
        Number_Of_Student: "49",
      },
  
      {
        id:2,
        Course_code: "GIG1005",
        courseId: "GIG1005",
        Lecture_group: "-",
        Tutorial_group: "WID",
        Course_name: "The Islamic and Asian Civilization",
        Course_explanation: "heellloo",
        Credit_hour: 2,
        Lecturer_name: "SSAR",
        Department: "Artificial Intelligence",
        Semester: 1,
        Year: "2020/2021",
        Time: "Thursday, 9-11am",
        startTime: '9:00',
        endTime: '11:00',
        day: 4,
        Place: "Online",
        Number_Of_Student: "91",
      },
  
      {
        id:3,
        Course_code: "GIG1005",
        courseId: "GIG1005",
        Lecture_group: "-",
        Tutorial_group: "WIH",
        Course_name: "The Islamic and Asian Civilization",
        Course_explanation: "heellloo",
        Credit_hour: 2,
        Lecturer_name: "AAN",
        Department: "Multimedia",
        Semester: 2,
        Year: "2020/2021",
        Time: "Thursday, 9-11am",
        startTime: '9:00',
        endTime: '11:00',
        day: 4,
        Place: "Online",
        Number_Of_Student: "49",
      },
  
      {
        id:4,
        Course_code: "GIG1005",
        courseId: "GIG1005",
        Lecture_group: "-",
        Tutorial_group: "WIE",
        Course_name: "The Islamic and Asian Civilization",
        Course_explanation: "heellloo",
        Credit_hour: 2,
        Lecturer_name: "AAN",
        Department: "Information Systems",
        Semester: 2,
        Year: "2020/2021",
        Time: "Thursday, 9-11am",
        startTime: '9:00',
        endTime: '11:00',
        day: 4,
        Place: "Online",
        Number_Of_Student: "44",
      },
  
      {
        id:5,
        Course_code: "GIG1005",
        courseId: "GIG1005",
        Lecture_group: "-",
        Tutorial_group: "WIF",
        Course_name: "The Islamic and Asian Civilization",
        Course_explanation: "heellloo",
        Credit_hour: 2,
        Lecturer_name: "NJ",
        Department: "Software Engineering",
        Semester: 2,
        Year: "2020/2021",
        Time: "Thursday, 9-11am",
        startTime: '9:00',
        endTime: '11:00',
        day: 4,
        Place: "Online",
        Number_Of_Student: "92",
      },
  
      {
        id:6,
        Course_code: "GIG1005",
        courseId: "GIG1005",
        Lecture_group: "-",
        Tutorial_group: "WIG",
        Course_name: "The Islamic and Asian Civilization",
        Course_explanation: "heellloo",
        Credit_hour: 2,
        Lecturer_name: "NF",
        Department: "Data Science",
        Semester: 2,
        Year: "2020/2021",
        Time: "Thursday, 9-11am",
        startTime: '9:00',
        endTime: '11:00',
        day: 4,
        Place: "Online",
        Number_Of_Student: "30",
      },
  
      {
        id:7,
        Course_code: "GIW1003",
        courseId: "GIW1003",
        Lecture_group: "-",
        Tutorial_group: "K, T, L",
        Course_name: "Fun With Robots",
        Course_explanation: "heellloo",
        Credit_hour: 2,
        Lecturer_name: "ZH",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Monday, 3-5pm",
        startTime: '15:00',
        endTime: '17:00',
        day: 1,
        Place: "Online",
        Number_Of_Student: "60",
      },
  
      {
        id:8,
        Course_code: "GIW1005",
        courseId: "GIW1005",
        Lecture_group: "-",
        Tutorial_group: "K, T, L",
        Course_name: "Mobile Typography Made Easy",
        Course_explanation: "heellloo",
        Credit_hour: 2,
        Lecturer_name: "NJ",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Monday, 3-5pm",
        startTime: '15:00',
        endTime: '17:00',
        day: 1,
        Place: "Online",
        Number_Of_Student: "30",
      },
  
      {
        id:9,
        Course_code: "GIW1006",
        courseId: "GIW1006",
        Lecture_group: "-",
        Tutorial_group: "K, T, L",
        Course_name: "Mutimedia 360",
        Course_explanation: "heellloo",
        Credit_hour: 2,
        Lecturer_name: "NAA",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Monday, 3-5pm",
        startTime: '15:00',
        endTime: '17:00',
        day: 1,
        Place: "Online",
        Number_Of_Student: "30",
      },
  
      {
        id:10,
        Course_code: "WIX1002",
        courseId: "WIX1002",
        Lecture_group: "K",
        Tutorial_group: "-",
        Course_name: "Fundamentals Of Programming",
        Course_explanation: "heellloo",
        Credit_hour: 5,
        Lecturer_name: "UO",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Tuesday, 9-11am",
        startTime: '9:00',
        endTime: '11:00',
        day: 2,
        Place: "Online",
        Number_Of_Student: "70",
      },
  
      {
        id:11,
        Course_code: "WIX1002",
        courseId: "WIX1002",
        Lecture_group: "-",
        Tutorial_group: "T",
        Course_name: "Fundamentals Of Programming",
        Course_explanation: "heellloo",
        Credit_hour: 5,
        Lecturer_name: "UO",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Thursday, 11-2pm",
        startTime: '11:00',
        endTime: '14:00',
        day: 4,
        Place: "Online",
        Number_Of_Student: "70",
      },
  
      {
        id:12,
        Course_code: "WIX1003",
        courseId: "WIX1003",
        Lecture_group: "K",
        Tutorial_group: "-",
        Course_name: "Computer System and Organizations",
        Course_explanation: "heellloo",
        Credit_hour: 4,
        Lecturer_name: "NMN",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Tuesday, 3-6pm",
        startTime: '13:00',
        endTime: '18:00',
        day: 2,
        Place: "Online",
        Number_Of_Student: "70",
      },
  
      {
        id:13,
        Course_code: "WIX2002",
        courseId: "WIX2002",
        Lecture_group: "K",
        Tutorial_group: "-",
        Course_name: "Project Management",
        Course_explanation: "heellloo",
        Credit_hour: 3,
        Lecturer_name: "HSM",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Tuesday, 11-1pm",
        startTime: '11:00',
        endTime: '13:00',
        day: 2,
        Place: "Online",
        Number_Of_Student: "30",
      },
  
      {
        id:14,
        Course_code: "WIX2002",
        courseId: "WIX2002",
        Lecture_group: "K",
        Tutorial_group: "-",
        Course_name: "Project Management",
        Course_explanation: "heellloo",
        Credit_hour: 3,
        Lecturer_name: "RA",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Thursday, 11-12pm",
        startTime: '11:00',
        endTime: '12:00',
        day: 4,
        Place: "Online",
        Number_Of_Student: "30",
      },
  
      {
        id:15,
        Course_code: "WIX3001",
        courseId: "WIX3001",
        Lecture_group: "K",
        Tutorial_group: "-",
        Course_name: "Soft Computing",
        Course_explanation: "heellloo",
        Credit_hour: 3,
        Lecturer_name: "WCS",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Wednesday, 4-6pm",
        startTime: '16:00',
        endTime: '18:00',
        day: 3,
        Place: "Online",
        Number_Of_Student: "240",
      },
  
      {
        id:16,
        Course_code: "WIX3001",
        courseId: "WIX3001",
        Lecture_group: "-",
        Tutorial_group: "T1",
        Course_name: "Soft Computing",
        Course_explanation: "-",
        Credit_hour: 3,
        Lecturer_name: "WCS",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Thursaday, 4-6pm",
        startTime: '14:00',
        endTime: '18:00',
        day: 4,
        Place: "Online",
        Number_Of_Student: "60",
      },
  
      {
        id:17,
        Course_code: "WIX3001",
        courseId: "WIX3001",
        Lecture_group: "-",
        Tutorial_group: "T2",
        Course_name: "Soft Computing",
        Course_explanation: "-",
        Credit_hour: 3,
        Lecturer_name: "WCS",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Friday, 2-3pm",
        startTime: '14:00',
        endTime: '15:00',
        day: 5,
        Place: "Online",
        Number_Of_Student: "60",
      },
  
      {
        id:18,
        Course_code: "WIX3001",
        courseId: "WIX3001",
        Lecture_group: "-",
        Tutorial_group: "T3",
        Course_name: "Soft Computing",
        Course_explanation: "-",
        Credit_hour: 3,
        Lecturer_name: "MNR",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Thursaday, 1-2pm",
        startTime: '13:00',
        endTime: '114:00',
        day: 4,
        Place: "Online",
        Number_Of_Student: "60",
      },
  
      {
        id:19,
        Course_code: "WIX3001",
        courseId: "WIX3001",
        Lecture_group: "-",
        Tutorial_group: "T4",
        Course_name: "Soft Computing",
        Course_explanation: "-",
        Credit_hour: 3,
        Lecturer_name: "MNR",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Friday, 11-12pm",
        startTime: '11:00',
        endTime: '12:00',
        day: 5,
        Place: "Online",
        Number_Of_Student: "60",
      },
  
      {
        id:20,
        Course_code: "WIA1002 / WIB1002",
        courseId: "WIA1002 / WIB1002",
        Lecture_group: "K1",
        Tutorial_group: "-",
        Course_name: "Data Structure",
        Course_explanation: "-",
        Credit_hour: 5,
        Lecturer_name: "LIM",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Tuesday, 9-11am",
        startTime: '9:00',
        endTime: '11:00',
        day: 2,
        Place: "Online",
        Number_Of_Student: "200",
      },
  
      {
        id:21,
        Course_code: "WIA1002 / WIB1002",
        Lecture_group: "K2",
        Tutorial_group: "-",
        Course_name: "Data Structure",
        Course_explanation: "-",
        Credit_hour: 5,
        Lecturer_name: "HWL",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Tuesday, 9-11am",
        Place: "Online",
        Number_Of_Student: "160",
      },
  
      {
        id:22,
        Course_code: "WIA1002 / WIB1002",
        Lecture_group: "K1",
        Tutorial_group: "T1",
        Course_name: "Data Structure",
        Course_explanation: "-",
        Credit_hour: 5,
        Lecturer_name: "LIM",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Thursday, 11-2pm",
        Place: "Online",
        Number_Of_Student: "40",
      },
  
      {
        id:23,
        Course_code: "WIA1002 / WIB1002",
        Lecture_group: "K1",
        Tutorial_group: "T2",
        Course_name: "Data Structure",
        Course_explanation: "-",
        Credit_hour: 5,
        Lecturer_name: "AD",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Thursday, 11-2pm",
        Place: "Online",
        Number_Of_Student: "40",
      },
  
      {
        id:24,
        Course_code: "WIA1002 / WIB1002",
        Lecture_group: "K1",
        Tutorial_group: "T3",
        Course_name: "Data Structure",
        Course_explanation: "-",
        Credit_hour: 5,
        Lecturer_name: "AD",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Friday, 2-5pm",
        Place: "Online",
        Number_Of_Student: "40",
      },
  
      {
        id:25,
        Course_code: "WIA1002 / WIB1002",
        Lecture_group: "K1",
        Tutorial_group: "T4",
        Course_name: "Data Structure",
        Course_explanation: "-",
        Credit_hour: 5,
        Lecturer_name: "MHN",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Thursday, 11-2pm",
        Place: "Online",
        Number_Of_Student: "40",
      },
  
      {
        id:26,
        Course_code: "WIA1002 / WIB1002",
        Lecture_group: "K1",
        Tutorial_group: "T5",
        Course_name: "Data Structure",
        Course_explanation: "-",
        Credit_hour: 5,
        Lecturer_name: "MHN",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Friday, 2-5pm",
        Place: "Online",
        Number_Of_Student: "40",
      },
      {
        id:27,
        Course_code: "WIA1002 / WIB1002",
        Lecture_group: "K2",
        Tutorial_group: "T6",
        Course_name: "Data Structure",
        Course_explanation: "-",
        Credit_hour: 5,
        Lecturer_name: "HWL",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Thursday, 11-2pm",
        Place: "Online",
        Number_Of_Student: "40",
      },
      {
        id:28,
        Course_code: "WIA1002 / WIB1002",
        Lecture_group: "K2",
        Tutorial_group: "T7",
        Course_name: "Data Structure",
        Course_explanation: "-",
        Credit_hour: 5,
        Lecturer_name: "MSS",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Thursday, 11-2pm",
        Place: "Online",
        Number_Of_Student: "40",
      },
      {
        id:29,
        Course_code: "WIA1002 / WIB1002",
        Lecture_group: "K2",
        Tutorial_group: "T8",
        Course_name: "Data Structure",
        Course_explanation: "-",
        Credit_hour: 5,
        Lecturer_name: "OSY",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Thursday, 11-2pm",
        Place: "Online",
        Number_Of_Student: "40",
      },
      {
        id:30,
        Course_code: "WIA1002 / WIB1002",
        Lecture_group: "K2",
        Tutorial_group: "T9",
        Course_name: "Data Structure",
        Course_explanation: "-",
        Credit_hour: 5,
        Lecturer_name: "CTK",
        Department: "All Department",
        Semester: 2,
        Year: "2020/2021",
        Time: "Thursday, 11-2pm",
        Place: "Online",
        Number_Of_Student: "40",
      },
      {
        id:31,
        Course_code: "WIB1001",
        Lecture_group: "K",
        Tutorial_group: "T",
        Course_name: "Fundamental Of Multimedia",
        Course_explanation: "-",
        Credit_hour: 3,
        Lecturer_name: "NF",
        Department: "Multimedia",
        Semester: 2,
        Year: "2020/2021",
        Time: "Wednesday, 2-5pm",
        Place: "Online",
        Number_Of_Student: "60",
      },
      {
        id:32,
        Course_code: "WIC1001",
        Lecture_group: "G1",
        Tutorial_group: "-",
        Course_name: "Advance Network Technology",
        Course_explanation: "-",
        Credit_hour: 3,
        Lecturer_name: "ATF",
        Department: "Computer System and Network",
        Semester: 2,
        Year: "2020/2021",
        Time: "Tuesday, 9-12pm",
        Place: "Online",
        Number_Of_Student: "50",
      },
      {
        id:33,
        Course_code: "WIC2001",
        Lecture_group: "G2",
        Tutorial_group: "-",
        Course_name: "Advance Network Technology",
        Course_explanation: "-",
        Credit_hour: 3,
        Lecturer_name: "NBA",
        Department: "Computer System and Network",
        Semester: 2,
        Year: "2020/2021",
        Time: "Tuesday, 9-12pm",
        Place: "Online",
        Number_Of_Student: "50",
      },
      {
        id:34,
        Course_code: "WID2001",
        Lecture_group: "K",
        Tutorial_group: "-",
        Course_name: "Knowledge Presentation and Reasoning",
        Course_explanation: "-",
        Credit_hour: 3,
        Lecturer_name: "RM",
        Department: "Artificial Intelligence",
        Semester: 2,
        Year: "2020/2021",
        Time: "Tuesday, 9-11am",
        Place: "Online",
        Number_Of_Student: "120",
      },
      {
        id:35,
        Course_code: "WID2001",
        Lecture_group: "T1",
        Tutorial_group: "-",
        Course_name: "Knowledge Presentation and Reasoning",
        Course_explanation: "-",
        Credit_hour: 3,
        Lecturer_name: "RM",
        Department: "Artificial Intelligence",
        Semester: 2,
        Year: "2020/2021",
        Time: "Thursday, 12-1pm",
        Place: "Online",
        Number_Of_Student: "60",
      },
      {
        id:36,
        Course_code: "WID2001",
        Lecture_group: "T2",
        Tutorial_group: "-",
        Course_name: "Knowledge Presentation and Reasoning",
        Course_explanation: "-",
        Credit_hour: 3,
        Lecturer_name: "RM",
        Department: "Artificial Intelligence",
        Semester: 2,
        Year: "2020/2021",
        Time: "Thursday, 1-2pm",
        Place: "Online",
        Number_Of_Student: "60",
      },
      {
        id:37,
        Course_code: "WIE2001",
        Lecture_group: "K",
        Tutorial_group: "-",
        Course_name: "Trend in Information Systems",
        Course_explanation: "-",
        Credit_hour: 3,
        Lecturer_name: "NMY",
        Department: "Information Systems",
        Semester: 2,
        Year: "2020/2021",
        Time: "Monday, 3-5pm",
        Place: "Online",
        Number_Of_Student: "50",
      },
      {
        id:38,
        Course_code: "WIE2001",
        Lecture_group: "-",
        Tutorial_group: "T",
        Course_name: "Trend in Information Systems",
        Course_explanation: "-",
        Credit_hour: 3,
        Lecturer_name: "NMY",
        Department: "Information Systems",
        Semester: 2,
        Year: "2020/2021",
        Time: "Tuesday, 2-3pm",
        Place: "Online",
        Number_Of_Student: "50",
      },
      {
        id:39,
        Course_code: "WIH2001",
        Lecture_group: "K",
        Tutorial_group: "-",
        Course_name: "Data Analytics",
        Course_explanation: "-",
        Credit_hour: 3,
        Lecturer_name: "HWL",
        Department: "Data Science",
        Semester: 2,
        Year: "2020/2021",
        Time: "Tuesday, 12-2pm",
        Place: "Online",
        Number_Of_Student: "30",
      },
  
      {
        id:40,
        Course_code: "WIH2001",
        Lecture_group: "-",
        Tutorial_group: "T",
        Course_name: "Data Analytics",
        Course_explanation: "-",
        Credit_hour: 3,
        Lecturer_name: "HWL",
        Department: "Data Science",
        Semester: 2,
        Year: "2020/2021",
        Time: "Thursday, 9-10am",
        Place: "Online",
        Number_Of_Student: "30",
      },
      {
        id:41,
        Course_code: "WIF2001",
        Lecture_group: "K1",
        Tutorial_group: "-",
        Course_name: "Human Computer Interaction",
        Course_explanation: "-",
        Credit_hour: 3,
        Lecturer_name: "NJ",
        Department: "Software Engineering",
        Semester: 2,
        Year: "2020/2021",
        Time: "Tuesday, 9-11am",
        Place: "Online",
        Number_Of_Student: "100",
      },
      {
        id:42,
        Course_code: "WIG2001",
        Lecture_group: "K",
        Tutorial_group: "-",
        Course_name: "Digital Image Processing",
        Course_explanation: "-",
        Credit_hour: 3,
        Lecturer_name: "HZ",
        Department: "Multimedia",
        Semester: 2,
        Year: "2020/2021",
        Time: "Wednesday, 9-11am",
        Place: "Online",
        Number_Of_Student: "50",
      },
  
  
    ];

//const onPressShowItems = Coursescheduler()
//console.log(onPressShowItems)

    const dataa = [
      {
        co: 'AIST3020',
        title: 'Intro to Computer Systems',
        section: '- - LEC',
        day: 2,
        startTime: '11:30',
        endTime: '12:15',
        location: 'Online Teaching',
        color: 'rgba(253,149,141,1)',
      },
      {
        courseId: 'AIST3020',
        title: 'Intro to Computer Systems',
        section: '- - LEC',
        day: 3,
        startTime: '16:30',
        endTime: '18:15',
        location: 'Online Teaching',
        color: 'rgba(253,149,141,1)',
      },
    ];
  

      return(
<View style={{flex:1}}>
        <Header text="My Course" />
        <View style={style.fonttimetable}>
          <Text>Timetable:</Text>
        </View>

        <View >
          <TimeTable
             events={dataa}
            eventOnPress={(item) => Alert.alert(item.courseId + "\n" + item.Course_name)}
          />
        </View>

      </View>
   
      )
  };

  const style = StyleSheet.create({
      daycontainer:{
        width: 70, 
        alignItems:'center',
        borderWidth:1,
        borderWidth:0.5,
        borderColor:'skyblue',
        position:'relative'
      },

      timecontainer:{
        width: 28, 
        borderWidth:1,
        borderWidth:0.5,
        borderColor:'skyblue',
        alignItems:'center',
        position:'relative',
        marginLeft:5
      },

      tablecontainer:{
        width: 70,  
        height:60, 
        borderWidth:1,
        borderWidth:0.5,
        borderColor:'skyblue',
        alignItems:'center',
        position:'relative'
      },

      tabletimecontainer:{
        width: 28,  
        height:60, 
        borderWidth:1,
        borderWidth:0.5,
        borderColor:'skyblue',
        alignItems:'flex-end',
        paddingRight:5,
        position:'relative',
        marginLeft:5
      },

      tclass:{
        height:180,
        width:70,
        marginLeft:243,
        marginTop:120,
        backgroundColor:'pink',
        opacity:0.9,
        position:'absolute'
      },

      fonttimetable:{
        marginVertical:10,
        marginHorizontal:20

      }
  })
