import { Image, View } from "react-native";
import movieLabIcon from "../../assets/images/movieLabIcon.png";
export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={movieLabIcon} className="w-20 h-20" resizeMode="contain" />
    </View>
  );
}
