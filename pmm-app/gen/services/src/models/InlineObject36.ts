/* tslint:disable */
/* eslint-disable */
/**
 * PMM API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: public
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface InlineObject36
 */
export interface InlineObject36 {
    /**
     * Unique randomly generated instance identifier.
     * @type {string}
     * @memberof InlineObject36
     */
    node_id?: string;
    /**
     * Remove node with all dependencies.
     * @type {boolean}
     * @memberof InlineObject36
     */
    force?: boolean;
}

export function InlineObject36FromJSON(json: any): InlineObject36 {
    return InlineObject36FromJSONTyped(json, false);
}

export function InlineObject36FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject36 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'node_id': !exists(json, 'node_id') ? undefined : json['node_id'],
        'force': !exists(json, 'force') ? undefined : json['force'],
    };
}

export function InlineObject36ToJSON(value?: InlineObject36 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'node_id': value.node_id,
        'force': value.force,
    };
}


