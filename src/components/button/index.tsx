import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";
import { colors } from "@/styles/color";
import { s } from "./styles";

const Button = ({ children, ...rest }: TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={s.button} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

type IconProps = {
  icon: React.ComponentType<TablerIconProps>;
};
const Icon = ({ icon: Icon }: IconProps) => {
  return <Icon size={24} color={colors.gray[100]} />;
};

Button.Icon = Icon;

export { Button };
