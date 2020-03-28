import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Detail() {
  const navigation = useNavigation();

  function navigateToIncidents() {
    navigation.goBack("");
  }

  function sendMail() {
    
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateToIncidents}>
          <Feather name="arrow-left" size={28} color="#e02041"/>
        </TouchableOpacity>
      </View>

      <FlatList
        data={[1]}
        style={styles.contentList}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() =>(
          <View>
            <View style={styles.incident}>

              <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
              <Text style={styles.incidentValue}>APAD</Text>

              <Text style={styles.incidentProperty}>Caso:</Text>
              <Text style={styles.incidentValue}>Cadela</Text>

              <Text style={styles.incidentProperty}>Valor:</Text>
              <Text style={styles.incidentValue}>120,00</Text>
              
            </View>

            <View style={styles.contactBox}>
              <Text style={styles.heroTitle}>Salve o dia!</Text>
              <Text style={styles.heroTitle}>Seja o Herói desse Caso.</Text>

              <Text style={styles.heroDescription}>Entre em contato: </Text>

              <View style={styles.actions}>
                
                <TouchableOpacity style={styles.action}>
                  <Text style={styles.actionText}>WhatsApp</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action}>
                  <Text style={styles.actionText}>E-Mail</Text>
                </TouchableOpacity>
              
              </View>
            </View>
          </View>
        )}
      />
    </View>

)}