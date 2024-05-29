import { GRAY } from "@styles/color";
import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageModal from "react-native-image-modal";

const BugDetected = memo(({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ImageModal
          swipeToDismiss={false}
          resizeMode="contain"
          imageBackgroundColor={GRAY.DEFAULT}
          style={{ width: 159, height: 100 }}
        />
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.camtext}>{item.cam}</Text>
        <Text style={styles.bugtext}>{item.bug}</Text>
        <Text style={styles.timetext}>{item.time}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 148,
    backgroundColor: GRAY.SUPERLIGHT,
    paddingHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  image: {
    paddingVertical: 24,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  textcontainer: {
    flex: 1,
    paddingHorizontal: 14,
    //justifyContent: "space-evenly",
    paddingVertical: 18,
  },
  camtext: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 8,
  },
  bugtext: {
    fontSize: 16,
    fontWeight: "bold",
  },
  timetext: {
    fontSize: 14,
    color: GRAY.LIGHT,
    paddingVertical: 10,
  },
});

export default BugDetected;
