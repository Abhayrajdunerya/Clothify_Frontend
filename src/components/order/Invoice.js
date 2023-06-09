import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Table, TableHeader, TableCell, TableBody, DataTableCell } from '@david.kucsai/react-pdf-table'

const Invoice = ({order}) => {

    const styles = StyleSheet.create({
        body: {
          paddingTop: 35,
          paddingBottom: 65,
          paddingHorizontal: 35,
        },
        title: {
          fontSize: 24,
          textAlign: "center",
        },
        author: {
          fontSize: 12,
          textAlign: "center",
          marginBottom: 40,
        },
        subtitle: {
          fontSize: 18,
          margin: 12,
        },
        text: {
          margin: 12,
          fontSize: 14,
          textAlign: "justify",
        },
        image: {
          marginVertical: 15,
          marginHorizontal: 100,
        },
        header: {
          fontSize: 12,
          marginBottom: 20,
          textAlign: "center",
          color: "grey",
        },
        footer: {
          padding: "100px",
          fontSize: 12,
          marginBottom: 20,
          textAlign: "center",
          color: "grey",
        },
        pageNumber: {
          position: "absolute",
          fontSize: 12,
          bottom: 30,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "grey",
        },
    });

  return (
    <Document>
        <Page style={styles.body} size={'A4'} >
            <Text style={styles.header} fixed >
                ~ {new Date().toLocaleString()} ~
            </Text>
            <Text style={styles.title}>Order Invoice</Text>
            <Text style={styles.author}>React Redux Ecommerce</Text>
            <Text style={styles.subtitle}>Order Summary</Text>

            <Table>
                <TableHeader>
                    <TableCell>Title</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell>Color</TableCell>
                </TableHeader>
            </Table>
            {/* ₹ */}
            <Table data={order.products}>
                <TableBody>
                    <DataTableCell getContent={(x) => x.product.title} />
                    <DataTableCell getContent={(x) => `INR ${x.product.price}`} />
                    <DataTableCell getContent={(x) => x.count} />
                    <DataTableCell getContent={(x) => x.product.brand.name} />
                    <DataTableCell getContent={(x) => x.color} />
                </TableBody>
            </Table>

            <Text style={styles.text}>
                <Text>Date: {'             '} {new Date(order.paymentIntent.created_at * 1000).toLocaleString()}</Text>
            </Text> {'\n'}
            <Text style={styles.text}>
                <Text>Order Id: {'        '} {order.paymentIntent.id}</Text>
            </Text> {'\n'}
            <Text style={styles.text}>
                <Text>Status: {'           '} {order.orderStatus}</Text>
            </Text> {'\n'}
            <Text style={styles.text}>
                <Text>Total Paid: {'      '} {order.paymentIntent.amount/100}</Text>
            </Text>

            <Text style={styles.footer}>
                ~ Thank tou for shopping with us ~
            </Text>
        </Page>
    </Document>
  )
}



export default Invoice