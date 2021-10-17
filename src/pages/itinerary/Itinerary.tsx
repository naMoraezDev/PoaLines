import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import {
  Box,
  Fade,
  Grid,
  Card,
  Table,
  Switch,
  Tooltip,
  TableRow,
  Container,
  TableHead,
  TableCell,
  TableBody,
  makeStyles,
  IconButton,
  Typography,
  CardContent,
  TableContainer,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import RoomIcon from "@material-ui/icons/Room";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { alert } from "../../shared/components/alert";
import { useTheme } from "../../shared/hooks/useTheme";
import { ItinerarySkeleton } from "./ItinerarySkeleton";
import { ItineraryService } from "../../shared/api/services/ItineraryService";

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
  const history = useHistory();
  const { isDark, toggleTheme } = useTheme();
  const { lineId } = useParams<IParamsTypes>();
  const [itinerary, setItinerary] = useState<any[]>([]);
  const [line, setLine] = useState<ILinha>({} as ILinha);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getItinerary = useCallback(async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
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
                  <Grid container item xs={12} alignItems="center">
                    <Grid item xs={1}>
                      <Tooltip arrow title="Voltar">
                        <IconButton
                          color="primary"
                          onClick={() => history.push(`/home`)}
                        >
                          <ArrowBackIcon />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item xs={10}>
                      {!isLoading ? (
                        <Fade in>
                          <Typography variant="h6">{`Itinerário | ${line.codigo} ${line.nome}`}</Typography>
                        </Fade>
                      ) : (
                        <Fade in>
                          <Skeleton variant="text" width={250} height={25} />
                        </Fade>
                      )}
                    </Grid>
                    <Grid item xs={1}>
                      <Tooltip
                        arrow
                        title={isDark ? "Tema Claro" : "Tema Escuro"}
                      >
                        <Switch
                          color="primary"
                          checked={isDark}
                          onChange={toggleTheme}
                        />
                      </Tooltip>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    {!isLoading ? (
                      <Fade in>
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
                                    {`lat: ${line.lat} / lng: ${line.lng}`}
                                  </TableCell>
                                  <TableCell align="center">
                                    <Tooltip
                                      arrow
                                      title={"Ver localização no Google Maps"}
                                    >
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
                                    </Tooltip>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Fade>
                    ) : (
                      <ItinerarySkeleton />
                    )}
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
