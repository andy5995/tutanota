// @flow

import {create, TypeRef} from "../../common/EntityFunctions"

export const NotificationSessionKeyTypeRef: TypeRef<NotificationSessionKey> = new TypeRef("sys", "NotificationSessionKey")
export const _TypeModel: TypeModel = {
	"name": "NotificationSessionKey",
	"since": 47,
	"type": "AGGREGATED_TYPE",
	"id": 1541,
	"rootId": "A3N5cwAGBQ",
	"versioned": false,
	"encrypted": false,
	"values": {
		"_id": {"name": "_id", "id": 1542, "since": 47, "type": "CustomId", "cardinality": "One", "final": true, "encrypted": false},
		"pushIdentifierSessionEncSessionKey": {
			"name": "pushIdentifierSessionEncSessionKey",
			"id": 1544,
			"since": 47,
			"type": "Bytes",
			"cardinality": "One",
			"final": false,
			"encrypted": false
		}
	},
	"associations": {
		"pushIdentifier": {
			"name": "pushIdentifier",
			"id": 1543,
			"since": 47,
			"type": "LIST_ELEMENT_ASSOCIATION",
			"cardinality": "One",
			"refType": "PushIdentifier",
			"final": false,
			"external": false
		}
	},
	"app": "sys",
	"version": "47"
}

export function createNotificationSessionKey(): NotificationSessionKey {
	return create(_TypeModel, NotificationSessionKeyTypeRef)
}