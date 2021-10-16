import React, { useCallback, useState } from "react";

import {
  CardContent,
  Container,
  Grid,
  makeStyles,
  Card,
  Tab,
  Tabs,
  TextField,
} from "@material-ui/core";

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
  const [searchType, setSearchType] = useState<"ônibus" | "lotação">("ônibus");
  const [search, setSearch] = useState<string>("");

  const handleSearch = useCallback((e: string) => {
    setSearch(e);
  }, []);

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
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
