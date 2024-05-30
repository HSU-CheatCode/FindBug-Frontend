

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { ColorStyle } from 'styles/color';
import { TypoStyle } from 'styles/font';

const CameraRegistPopup = ({ visible, setVisible }) => {
    return (
        <View style={styles.modal}>
            <Modal transparent style={styles.modal} visible={visible}>
                <View style={styles.centerView}>
                    <View style={styles.container}>
                        <View>
                            <Text style={styles.title}>{'카메라를\n등록하시겠습니까?'}</Text>
                        </View>
                        <Text style={styles.contentText}>{'카메라 등록을 하시면\n가게의 해충 방지가 가능합니다.'}</Text>
                        {/* 카메라 등록 이벤트 추가 */}
                        <TouchableOpacity style={styles.confirmButton} onPress={() => setVisible(false)}>
                            <Text style={styles.confirmText}>확인</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default CameraRegistPopup;

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: ColorStyle.Black,
        opacity: 0.4,
    },
    centerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: 296,
        height: 200,
        borderRadius: 16,
        paddingTop: 24,
        justifyContent: 'space-between',
        backgroundColor: ColorStyle.White,
    },

    confirmButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4163EB',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        height: 44,
    },
    title: {
        color: ColorStyle.Blue2,
        fontSize: 20,
        fontFamily: TypoStyle.SemiBold,
        lineHeight: 28,
        textAlign: 'center',
    },
    contentText: {
        color: '#19191B',
        fontSize: 14,
        fontFamily: TypoStyle.Regular,
        lineHeight: 19.6,
        textAlign: 'center',
        paddingBottom: 10,
    },

    confirmText: {
        color: ColorStyle.White,
        fontSize: 14,
        fontFamily: TypoStyle.Regular,
        lineHeight: 28,
        textAlign: 'center',
    },
});
