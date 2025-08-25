import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {Mixpanel} from 'mixpanel-react-native';

const trackAutomaticEvents = false;
const token = 'Your Project Token';
const mixpanel = new Mixpanel(token, trackAutomaticEvents);
mixpanel.init();

export default function MixpanelDemo() {
    return (
    <SafeAreaView>
        <Button
    title="Select Premium Plan"
    onPress={() => mixpanel.track('Plan Selected', {Plan: 'Premium'})}
/>
    </SafeAreaView>
);
}