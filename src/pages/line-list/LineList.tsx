import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";

import {
  Box,
  Tab,
  Grid,
  Card,
  Tabs,
  Fade,
  Table,
  Switch,
  Tooltip,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TextField,
  Container,
  makeStyles,
  CardContent,
  TableContainer,
  InputAdornment,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { alert } from "../../shared/components/alert";
import { LineListSkeleton } from "./LineListSkeleton";
import { useTheme } from "../../shared/hooks/useTheme";
import { ILine, LineService } from "../../shared/api/services/LinesService";

const useStyles = makeStyles((theme) => {
  return {
    background: {
      backgroundColor: theme.palette.background.default,
      minHeight: "100vh",
    },
    card: {
      marginTop: theme.spacing(10),
    },
    tableRow: {
      cursor: "pointer",
    },
  };
});

export const LineList: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const { isDark, toggleTheme } = useTheme();
  const [search, setSearch] = useState<string>("");
  const [busLines, setBusLines] = useState<ILine[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [capacityLines, setCapacitiesLines] = useState<ILine[]>([]);
  const [filtredBusLines, setFiltredBusLines] = useState<ILine[]>([]);
  const [filtredCapacityLines, setFiltredCapacitiesLines] = useState<ILine[]>(
    []
  );
  const [searchType, setSearchType] = useState<"ônibus" | "lotação">("ônibus");

  const handleSearch = useCallback((e: string) => {
    setSearch(e);
  }, []);

  useEffect(() => {
    setFiltredBusLines(
      busLines.filter(
        (line) =>
          line.codigo.toLowerCase().includes(search.toLowerCase()) ||
          line.nome.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, busLines]);

  useEffect(() => {
    setFiltredCapacitiesLines(
      capacityLines.filter(
        (line) =>
          line.codigo.toLowerCase().includes(search.toLowerCase()) ||
          line.nome.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, capacityLines]);

  const getLines = useCallback(async (lineType: "o" | "l") => {
    setIsLoading(true);
    try {
      if (lineType === "o") {
        const response = await LineService.getLines("o");
        setBusLines(response);
      } else {
        const response = await LineService.getLines("l");
        setCapacitiesLines(response);
      }
    } catch (error: any) {
      alert(error.Mensagem, `error`);
      return error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getLines("o");
    getLines("l");
  }, [getLines]);

  return (
    <div className={classes.background}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Card elevation={0} className={classes.card}>
              <CardContent>
                <Grid container justifyContent="center" spacing={2}>
                  <Grid
                    item
                    xs={12}
                    container
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={3}>
                      <Fade in>
                        <Tabs
                          centered
                          value={searchType}
                          indicatorColor="primary"
                        >
                          <Tab
                            value="ônibus"
                            label="Ônibus"
                            onClick={() => setSearchType("ônibus")}
                          />
                          <Tab
                            value="lotação"
                            label="Lotação"
                            onClick={() => setSearchType("lotação")}
                          />
                        </Tabs>
                      </Fade>
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
                    <Fade in>
                      <TextField
                        fullWidth
                        value={search}
                        variant="outlined"
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Por favor, informe a linha desejada."
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon color="primary" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Fade>
                  </Grid>
                  <Grid item xs={12}>
                    {!isLoading ? (
                      <Fade in>
                        <TableContainer component={Box} maxHeight={560}>
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell>Código</TableCell>
                                <TableCell>Linha</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {searchType === "ônibus" &&
                                (search.length === 0
                                  ? busLines
                                  : filtredBusLines
                                ).map((line, index) => (
                                  <TableRow
                                    hover
                                    key={index}
                                    className={classes.tableRow}
                                    onClick={() =>
                                      history.push(`/itinerary/${line.id}`)
                                    }
                                  >
                                    <TableCell>{line.codigo}</TableCell>
                                    <TableCell>{line.nome}</TableCell>
                                  </TableRow>
                                ))}
                              {searchType === "lotação" &&
                                (search.length === 0
                                  ? capacityLines
                                  : filtredCapacityLines
                                ).map((line, index) => (
                                  <TableRow
                                    hover
                                    key={index}
                                    className={classes.tableRow}
                                    onClick={() =>
                                      history.push(`/itinerary/${line.id}`)
                                    }
                                  >
                                    <TableCell>{line.codigo}</TableCell>
                                    <TableCell>{line.nome}</TableCell>
                                  </TableRow>
                                ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Fade>
                    ) : (
                      <LineListSkeleton />
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
