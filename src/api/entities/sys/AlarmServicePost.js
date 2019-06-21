// @flow

import {create, TypeRef} from "../../common/EntityFunctions"

export const AlarmServicePostTypeRef: TypeRef<AlarmServicePost> = new TypeRef("sys", "AlarmServicePost")
export const _TypeModel: TypeModel = {
	"name": "AlarmServicePost",
	"since": 47,
	"type": "DATA_TRANSFER_TYPE",
	"id": 1562,
	"rootId": "A3N5cwAGGg",
	"versioned": false,
	"encrypted": true,
	"values": {"_format": {"name": "_format", "id": 1563, "since": 47, "type": "Number", "cardinality": "One", "final": false, "encrypted": false}},
	"associations": {
		"alarmNotifications": {
			"name": "alarmNotifications",
			"id": 1564,
			"since": 47,
			"type": "AGGREGATION",
			"cardinality": "Any",
			"refType": "AlarmNotification",
			"final": false
		}
	},
	"app": "sys",
	"version": "47"
}

export function createAlarmServicePost(): AlarmServicePost {
	return create(_TypeModel, AlarmServicePostTypeRef)
}