import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";

import { alert } from "../shared/components/alert";
import { ItineraryService } from "../shared/api/services/ItineraryService";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  makeStyles,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  IconButton,
} from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";

interface IParamsTypes {
  lineId: string;
}

interface ILinha {
  codigo: string;
  nome: string;
}

const useStyles = makeStyles((theme) => {
  return {
    background: {
      backgroundColor: theme.palette.background.default,
      minHeight: "100vh",
    },
    card: {
      marginTop: theme.spacing(10),
    },
  };
});

export const Itinerary: React.FC = () => {
  const classes = useStyles();
  const { lineId } = useParams<IParamsTypes>();
  const [itinerary, setItinerary] = useState<any[]>([]);
  const [line, setLine] = useState<ILinha>({} as ILinha);

  const getItinerary = useCallback(async () => {
    try {
      const response = await ItineraryService.getItinerary(lineId);
      setItinerary(Object.values(response));
      setLine({
        codigo: response.codigo,
        nome: response.nome,
      });
    } catch (error: any) {
      alert(error.Mensagem, `error`);
      return error;
    }
  }, [lineId]);

  useEffect(() => {
    getItinerary();
  }, [getItinerary]);

  return (
    <div className={classes.background}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Card elevation={0} className={classes.card}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h6">{`Itinerário | ${line.codigo} ${line.nome}`}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TableContainer component={Box} maxHeight={650}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Localização</TableCell>
                            <TableCell align="center">Maps</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {itinerary.map((line, index) => (
                            <TableRow hover key={index}>
                              <TableCell>
                                {line.lat}
                                {line.lng}
                              </TableCell>
                              <TableCell align="center">
                                <IconButton
                                  color="primary"
                                  onClick={() =>
                                    window.open(
                                      `https://www.google.com/maps/?q=${line.lat},${line.lng}`,
                                      "_blank"
                                    )
                                  }
                                >
                                  <RoomIcon />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
