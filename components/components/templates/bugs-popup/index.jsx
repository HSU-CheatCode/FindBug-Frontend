
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { ColorStyle } from 'styles/color';
import { TypoStyle } from 'styles/font';

const BugsPopup = ({ visible, setVisible }) => {
    return (
        <View style={styles.modal}>
            <Modal animationType="fade" transparent visible={visible}>
                <View style={styles.centerView}>
                    <View style={styles.container}>
                        <View>
                            <Text style={styles.warnText}>WARNING!</Text>
                            <Text style={styles.title}>벌레가 나타났습니다.</Text>
                        </View>
                        <Text style={styles.contentText}>{'확인 버튼을 누르면 대처 방법을\n확인할 수 있습니다.'}</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.cancelButton} onPress={() => setVisible(false)}>
                                <Text style={styles.cancelText}>취소</Text>
                            </TouchableOpacity>
                            {/* 확인 이벤트 추가 */}
                            <TouchableOpacity style={styles.confirmButton}>
                                <Text style={styles.confirmText}>확인</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default BugsPopup;

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
        height: 219,
        borderRadius: 16,
        padding: 24,
        justifyContent: 'space-between',
        backgroundColor: ColorStyle.White,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: '#F7F5FF',
        width: 116,
        height: 44,
    },
    confirmButton: {
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: '#4163EB',
        width: 116,
        height: 44,
    },
    warnText: {
        color: ColorStyle.Blue2,
        fontSize: 16,
        fontFamily: TypoStyle.SemiBold,
        lineHeight: 22.4,
        textAlign: 'center',
    },
    title: {
        color: ColorStyle.Blue2,
        fontSize: 20,
        fontFamily: TypoStyle.Bold,
        lineHeight: 28,
        textAlign: 'center',
    },
    contentText: {
        color: '#19191B',
        fontSize: 14,
        fontFamily: TypoStyle.Regular,
        lineHeight: 19.6,
        textAlign: 'center',
        paddingBottom: 20,
    },
    cancelText: {
        color: ColorStyle.Blue,
        fontSize: 14,
        fontFamily: TypoStyle.Regular,
        lineHeight: 28,
        textAlign: 'center',
    },
    confirmText: {
        color: ColorStyle.White,
        fontSize: 14,
        fontFamily: TypoStyle.Regular,
        lineHeight: 28,
        textAlign: 'center',
    },
});
