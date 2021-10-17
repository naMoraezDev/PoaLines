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
      width: theme.spacing(20),
    },
  };
});

export const LineListSkeleton: React.FC = () => {
  const classes = useStyles();

  return (
    <Fade in>
      <TableContainer component={Box} maxHeight={560}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.cell}>
                <Skeleton variant="text" width={50} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={50} height={20} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={50} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={70} height={20} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={50} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={70} height={20} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={50} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={70} height={20} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={50} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={70} height={20} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={50} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={70} height={20} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={50} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={70} height={20} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={50} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={70} height={20} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={50} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={70} height={20} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={50} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={70} height={20} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={50} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={70} height={20} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Fade>
  );
};
