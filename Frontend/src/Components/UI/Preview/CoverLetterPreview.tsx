import React from 'react'
import { Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';


interface CoverLetterProps {
    title: string;
    date: string;
    content: string;
}

export default function CoverLetterPreview(coverletterprops: CoverLetterProps) {

    const styles = StyleSheet.create({
        body: {
            paddingTop: '1in',
            paddingBottom: '1in',
            paddingHorizontal: '1in',
            fontFamily: 'Times-Roman'
        },
        title: {
            fontSize: 24,
            textAlign: 'center',

        },
        author: {
            fontSize: 12,
            textAlign: 'center',
            marginBottom: 40,
        },
        subtitle: {
            fontSize: 18,
            margin: 12,

        },
        text: {
            margin: 12,
            fontSize: 12,
            textAlign: 'justify',

        },
        image: {
            marginVertical: 15,
            marginHorizontal: 100,
        },
        header: {
            fontSize: 12,
            marginBottom: 20,
            textAlign: 'center',
            color: 'grey',
        },
        pageNumber: {
            position: 'absolute',
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: 'center',
            color: 'grey',
        },
        hr: {
            height: '1px',
            border: 0,
            borderTop: 1,
            marginTop: 2,
            marginHorizontal: 10

        }
    });
    /*
    Font.register({
        family: 'Roboto',
        src: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
    });
    */

    return (
        <Document>
            <Page style={styles.body}>
                <View style={styles.title}>
                    <Text>{coverletterprops.title}</Text>
                </View>
                <View style={styles.hr}></View>
                <View style={styles.text}>
                    <Text>{coverletterprops.date}</Text>
                    <Text render={() => {
                        return coverletterprops.content
                    }} fixed />
                </View>
            </Page>
        </Document>
    )
}
