import React from "react";

import {
  Box,
  Fade,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  makeStyles,
  TableContainer,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => {
  return {
    cell: {
      width: theme.spacing(130),
    },
    circleSkeleton: {
      marginLeft: theme.spacing(1),
    },
  };
});

export const ItinerarySkeleton: React.FC = () => {
  const classes = useStyles();

  return (
    <Fade in>
      <TableContainer component={Box} maxHeight={650}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.cell}>
                <Skeleton variant="text" width={100} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={50} height={20} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={200} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton
                  width={30}
                  height={30}
                  variant="circle"
                  className={classes.circleSkeleton}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={200} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton
                  width={30}
                  height={30}
                  variant="circle"
                  className={classes.circleSkeleton}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={200} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton
                  width={30}
                  height={30}
                  variant="circle"
                  className={classes.circleSkeleton}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={200} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton
                  width={30}
                  height={30}
                  variant="circle"
                  className={classes.circleSkeleton}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={200} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton
                  width={30}
                  height={30}
                  variant="circle"
                  className={classes.circleSkeleton}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={200} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton
                  width={30}
                  height={30}
                  variant="circle"
                  className={classes.circleSkeleton}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={200} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton
                  width={30}
                  height={30}
                  variant="circle"
                  className={classes.circleSkeleton}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={200} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton
                  width={30}
                  height={30}
                  variant="circle"
                  className={classes.circleSkeleton}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={200} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton
                  width={30}
                  height={30}
                  variant="circle"
                  className={classes.circleSkeleton}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={200} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton
                  width={30}
                  height={30}
                  variant="circle"
                  className={classes.circleSkeleton}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Fade>
  );
};
