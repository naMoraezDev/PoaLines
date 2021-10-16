import React, { useCallback, useEffect, useState } from "react";

import {
  Box,
  Tab,
  Grid,
  Card,
  Tabs,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TextField,
  Container,
  makeStyles,
  CardContent,
  TableContainer,
} from "@material-ui/core";

import { alert } from "../shared/components/alert";
import { ILine, LineService } from "../shared/api/services/LinesService";

const useStyles = makeStyles((theme) => {
  return {
    background: {
      backgroundColor: theme.palette.background.default,
      minHeight: "100vh",
    },
  };
});

export const HomePage: React.FC = () => {
  const classes = useStyles();
  const [search, setSearch] = useState<string>("");
  const [busLines, setBusLines] = useState<ILine[]>([]);
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
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Card elevation={0}>
              <CardContent>
                <Grid container justifyContent="center" spacing={2}>
                  <Grid item xs={12}>
                    <Tabs centered value={searchType} indicatorColor="primary">
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
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      value={search}
                      variant="outlined"
                      onChange={(e) => handleSearch(e.target.value)}
                      placeholder="Por favor, informe a linha desejada."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TableContainer component={Box} maxHeight={500}>
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
                              <TableRow key={index}>
                                <TableCell>{line.codigo}</TableCell>
                                <TableCell>{line.nome}</TableCell>
                              </TableRow>
                            ))}
                          {searchType === "lotação" &&
                            (search.length === 0
                              ? capacityLines
                              : filtredCapacityLines
                            ).map((line, index) => (
                              <TableRow key={index}>
                                <TableCell>{line.codigo}</TableCell>
                                <TableCell>{line.nome}</TableCell>
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
