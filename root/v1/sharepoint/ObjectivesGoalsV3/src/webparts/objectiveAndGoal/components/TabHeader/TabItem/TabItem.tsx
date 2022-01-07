import * as React from "react";
import styles from './TabItem.module.scss';
import { ITabItemProps } from './ITabItemProps';
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";

const TabItem = (props) =>{
return (<DefaultButton title={props.Title} id={props.Id} />); 
};

  export default TabItem