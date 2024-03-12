import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logImage: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.primary,
  },
  aurthor: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 5,
  },

  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray2,
    marginTop: 3,
    textTransform: "capitalize",
  },

  btnBook: {
    width: "70%",
    color: "#f8fafc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "#16a34a",
  },
  btnBook2: {
    width: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingVertical: 5,
    borderWidth: 0.5,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#083344",
  },
});

export default styles;
