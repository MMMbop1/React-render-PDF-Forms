import React from 'react';
import { Document, Page, Text, View, StyleSheet, Rect, Image } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import { useContext } from "react";
import { DataContext } from "./Form";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'black',
    color: '#FFD700'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: 2000,
    height: 150,
    backgroundColor: 'black',
    border: '1 solid #FFD700'
  },
  headerText: {
    marginTop: 15,
    fontSize: '40',
    marginLeft: 30,
  },
  title: {
    marginLeft: 31.5
  },
  about: {
    marginTop: 10,
    marginLeft: 32.35,
    fontSize: '10',
    width: 300
  },
  imageContainer: {
    height: 149,
    width: 200,
    backgroundColor: '#FFD700',
    position: 'absolute',
    marginLeft: 400,
    border: '1 solid black'
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 15,
    marginLeft: 40,
    borderRadius: '90'
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 20
  },
  bodyContainer: {
    marginBottom: 30,
  },
  bodyWrapper: {
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  bodyText: {
    fontSize: '25',
    marginBottom: 5,
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginBottom: 15,
    marginTop: 15
  },
  experience: {
    fontSize: '15',
    margin: 5
  },
  bodyWrapperTwo: {
    width: 200,
    marginLeft: 30,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  border: {
    backgroundColor: 'black',
    border: '1 solid #FFD700',
    marginTop: 80
  }
});

// Create Document Component
export const Template = () => {
    const data = useContext(DataContext);
    console.log(data);
    return (
        <PDFViewer width={1000} height={800}>
        <Document>
            <Page size="A4" style={styles.page}>
            <View>
            <View style={styles.header}> 
                <Rect>
                    <Text style={styles.headerText}>{data.firstName + ' ' + data.secondName}</Text>
                    <Text style={styles.title}>-{data.title}</Text>
                    <View style={styles.about}>
                      <Text>{data.about}</Text>
                    </View>
                </Rect>
                    <View style={styles.imageContainer}>
                      <Image style={styles.image} src="https://upload.wikimedia.org/wikipedia/commons/6/67/Luke_Skywalker_-_Welcome_Banner_%28Cropped%29.jpg"/>
                    </View>
            </View>
              <View style={styles.body}>
              <View style={styles.bodyContainer}>
                <View style={styles.bodyWrapper}>
                    <Text style={styles.bodyText}>Education</Text>
                    {data.education.map(val => <Text style={styles.experience}>{val}</Text>)}
                    <Rect style={styles.line}></Rect>
                    <View style={styles.bodyContainer}>
                    <Text style={styles.bodyText}>Work Experience</Text>
                    {data.education.map(val => <Text style={styles.experience}>{val}</Text>)}
                  </View>
                </View>
              </View>
              <View style={styles.bodyWrapperTwo}>
                <Rect style={styles.border}>
                  <Text style={styles.bodyText}>Skills</Text>
                  {data.skills.map(val => <Text style={styles.experience}>-{val}</Text>)}
                </Rect>
                <Rect style={styles.border}>
                  <Text style={styles.bodyText}>Contact</Text>
                  {data.contact.map(val => <Text style={styles.experience}>-{val}</Text>)}
                </Rect>
              </View>
            </View>
            </View>
            </Page>
            </Document>
        </PDFViewer>
    );
}