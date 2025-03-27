import React from "react";
import { View, StatusBar } from "react-native";
{/** Import style sheet and row, column, and box file */}
import styles from "./styles";
import Row from './row';
import Column from "./column";
import Box from "./box";
{/** Column is up or down row is left or right. You could ROW accross the horizon. */}
{/** Put two columns in each row with two boxes in each of the two columns */}
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Row>
        <Column>
          <Box>#1</Box>
          <Box>#2</Box>
        </Column>
        <Column>
          <Box>#3</Box>
          <Box>#4</Box>
        </Column>
      </Row> {/** end of row 1 */}
      <Row>
        <Column>
          <Box>#5</Box>
          <Box>#6</Box>
        </Column>
        <Column>
          <Box>#7</Box>
          <Box>#8</Box>
        </Column>
      </Row> {/** end of row 2 */}
      <Row>
        <Column>
          <Box>#9</Box>
          <Box>#10</Box>
        </Column>
        <Column>
          <Box>#11</Box>
          <Box>#12</Box>
        </Column>
      </Row> {/** end of row 3 */}
    </View>
  );
}