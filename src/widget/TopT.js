import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LightSpeed from 'react-reveal/LightSpeed';



function createData(image, number, name, artist) {
    return { image, number, name, artist }
}


 export default function Tabloide(props) {

    const [rows, setrows] = useState([])

    useEffect(() => {
        var tmp = []
        
        console.log(props.data)
        if (props.data != null) {
            props.data.forEach((line, i) => {
                tmp.push(createData(line.album.images[1].url, i + 1, line.name,line.artists[0].name));
            });
            setrows(tmp);
        }
    }, [props.data])


    return (
        <TableContainer component={Paper} style={{width : "50%", marginRight: "auto", marginLeft: "auto"}}>
            <Table  aria-label="simple table">
               
                <TableBody>
                    {rows.map((row) => (
                        <LightSpeed left>
                        <TableRow key={row.name}> 
                            <TableCell  >
                                <img src={row.image} alt="" style={{width: "150px",height: "150px" }}></img>
                            </TableCell>
                            <TableCell >{row.number}</TableCell>
                            <TableCell ><h2 style={{textShadow: "#FE6B8B 1px 0 10px"}}>{row.name}</h2></TableCell>
                            <TableCell><p style={{fontSize: "20px", fontStyle: "italic"}}>{row.artist}</p></TableCell>
                        </TableRow>
                        </LightSpeed>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}