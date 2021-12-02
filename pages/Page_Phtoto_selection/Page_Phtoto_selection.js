import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_Screenshot_2021_10_29_at_20_44_1_link} from './assets/imageLinks.js'
import {image_Rectangle_52_link} from './assets/imageLinks.js'
const Page_Phtoto_selection  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page8}    >
			<View style = {noneModeStyles._map}    >
				<View style = {noneModeStyles._FIELDS}    >
				</View>
				<View style = {noneModeStyles._Frame_64}    >
					<View style = {noneModeStyles.style4}    >
						<View style = {noneModeStyles.style5}   >
							<Svg style={{height: 320, width: 308}} viewBox = "0 0 308 320">
								<Path fill = {"#C5EEC6"}   stroke = {"#15C69B"}  d = "M138.518 319.279L0.696404 176.606L170.597 0.724131L307.23 144.627L138.518 319.279Z"/>
							</Svg>
						</View>
					</View>
					<Text style = {noneModeStyles._field_name}   >
						field name
					</Text>
					<View style = {noneModeStyles._Frame_115}    >
						<View style = {noneModeStyles._Ellipse_4}    >
						</View>
						<View style = {noneModeStyles._Ellipse_5}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Frame_148}    >
				<Text style = {noneModeStyles._Add_observation}   >
					Add observation
				</Text>
				<View style = {noneModeStyles._inpits}    >
					<View style = {noneModeStyles._Dropdowns}    >
						<Text style = {noneModeStyles._Label}   >
							Observation type*
						</Text>
						<View style = {noneModeStyles._InputField}    >
							<Text style = {noneModeStyles._Value}   >
								Pests/disease
							</Text>
							<View style = {noneModeStyles._chevron_down}    >
								<View style = {noneModeStyles.style18}    >
									<View style = {noneModeStyles.style19}   >
										<Svg style={{height: 7, width: 13}} viewBox = "0 0 13 7">
											<Path fill = {"none"}   stroke = {"#252A31"}  d = "M0.5 0.5L6.5 6.5L12.5 0.5"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Dropdowns_2}    >
						<Text style = {noneModeStyles._Label_2}   >
							Title*
						</Text>
						<View style = {noneModeStyles._InputField_2}    >
							<Text style = {noneModeStyles._Value_2}   >
								Title 3
							</Text>
							<View style = {noneModeStyles._chevron_down_2}    >
								<View style = {noneModeStyles.style25}    >
									<View style = {noneModeStyles.style26}   >
										<Svg style={{height: 7, width: 13}} viewBox = "0 0 13 7">
											<Path fill = {"none"}   stroke = {"#252A31"}  d = "M0.5 0.5L6.5 6.5L12.5 0.5"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._InputField_3}    >
						<Text style = {noneModeStyles._Label_3}   >
							Description
						</Text>
						<View style = {noneModeStyles._InputField_4}    >
							<Text style = {noneModeStyles._Value_3}   >
								Add short description (optional)
							</Text>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Frame_151}    >
					<View style = {noneModeStyles._Frame_150}    >
						<Text style = {noneModeStyles._Photo}   >
							Photo
						</Text>
						<Text style = {noneModeStyles._Good_photo_helps_to_react_faster_and_solve_reported_problems_}   >
							Good photo helps to react faster and solve reported problems.
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Frame_152}    >
					<View style = {noneModeStyles._Screenshot_2021_10_29_at_20_44_1_container}    >
						<View style = {noneModeStyles._Screenshot_2021_10_29_at_20_44_1}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Screenshot_2021_10_29_at_20_44_1_link}}/>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_52_container}    >
					<View style = {noneModeStyles._Rectangle_52}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_52_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._BUTTONS}    >
					<Text style = {noneModeStyles._Label_4}   >
						Add observation
					</Text>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Phtoto_selection

const noneModeStyles = StyleSheet.create({
_page8: {
	height: 677,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_map: {
	width: 360,
	height: 197,
	backgroundColor: "rgb(216, 243, 203)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_FIELDS: {
	width: 201.63,
	height: 150.205,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 87,
	top: 15,
	},
_Frame_64: {
	width: 192,
	height: 218.889,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 84},
		{translateY: -20.7945},
	],
	},
style4: {
	width: 306,
	height: 318,
	position: "absolute",
	left: -57,
	top: -59,
	},
style5: {
	},
_field_name: {
	width: 88.8477,
	height: 21.8588,
	position: "absolute",
	left: 52,
	top: 67,
	color: "rgb(37, 42, 49)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 20,
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "center",
	},
_Frame_115: {
	width: 7,
	height: 7,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 92,
	top: 97,
	},
_Ellipse_4: {
	width: 7,
	height: 7,
	position: "absolute",
	borderTopWidth: 2,
	borderRightWidth: 2,
	borderBottomWidth: 2,
	borderLeftWidth: 2,
	borderStyle: "solid",
	borderColor: "rgb(123, 97, 255)",
	},
_Ellipse_5: {
	width: 3,
	height: 3,
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
_Frame_148: {
	width: 360,
	height: 573,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	position: "absolute",
	left: 1,
	top: 110,
	},
_Add_observation: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 16,
	top: 12,
	color: "rgb(37, 42, 49)",
	fontSize: 22,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_inpits: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 16,
	top: 57,
	},
_Dropdowns: {
	width: 328,
	height: 68,
	backgroundColor: "rgba(255, 255, 255, 0)",
	flexShrink: 0,
	marginBottom: 16,
	},
_Label: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 2,
	color: "rgb(37, 42, 49)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_InputField: {
	width: "auto",
	height: 44,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 24,
	right: 0,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(186, 199, 213)",
	borderRadius: 4,
	},
_Value: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 12,
	top: 12,
	color: "rgb(37, 42, 49)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	letterSpacing: 0,
	textAlign: "left",
	},
_chevron_down: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	top: 10,
	right: 8,
	},
style18: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 9},
	],
	},
style19: {
	},
_Dropdowns_2: {
	width: 328,
	height: 68,
	backgroundColor: "rgba(255, 255, 255, 0)",
	flexShrink: 0,
	marginBottom: 16,
	},
_Label_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 2,
	color: "rgb(37, 42, 49)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_InputField_2: {
	width: "auto",
	height: 44,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 24,
	right: 0,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(186, 199, 213)",
	borderRadius: 4,
	},
_Value_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 12,
	top: 12,
	color: "rgb(37, 42, 49)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_chevron_down_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	top: 10,
	right: 8,
	},
style25: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 9},
	],
	},
style26: {
	},
_InputField_3: {
	width: 328,
	height: 68,
	backgroundColor: "rgba(255, 255, 255, 0)",
	flexShrink: 0,
	},
_Label_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 2,
	color: "rgb(37, 42, 49)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_InputField_4: {
	width: "auto",
	height: 44,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 24,
	right: 0,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(186, 199, 213)",
	borderRadius: 4,
	},
_Value_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 12,
	top: 12,
	color: "rgb(105, 125, 149)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_151: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 16,
	top: 308,
	},
_Frame_150: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	},
_Photo: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginBottom: 4,
	color: "rgb(37, 42, 49)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Good_photo_helps_to_react_faster_and_solve_reported_problems_: {
	width: 330,
	height: "auto",
	flexShrink: 0,
	color: "rgb(105, 125, 149)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_152: {
	width: 154,
	height: 90,
	backgroundColor: "rgb(237, 241, 244)",
	overflow: "hidden",
	position: "absolute",
	left: 16,
	top: 383,
	borderRadius: 4,
	},
_Screenshot_2021_10_29_at_20_44_1_container: {
	width: 159,
	height: 98,
	position: "absolute",
	left: -3,
	top: 0,
	},
_Screenshot_2021_10_29_at_20_44_1: {
	width: "100%",
	height: "100%",
	},
_Rectangle_52_container: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 79,
	top: 415,
	},
_Rectangle_52: {
	width: "100%",
	height: "100%",
	},
_BUTTONS: {
	width: 328,
	height: 44,
	backgroundColor: "rgb(34, 191, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 16,
	top: 504,
	paddingTop: 12,
	paddingRight: 16,
	paddingBottom: 12,
	paddingLeft: 16,
	borderRadius: 3,
	},
_Label_4: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "center",
	},
})

