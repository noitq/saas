import sendRequestAndGetResponse from './sendRequestAndGetResponse';

const BASE_PATH = '/api/v1/team-member';

export const getInitialData = (options: any = {}) =>
  sendRequestAndGetResponse(
    `${BASE_PATH}/get-initial-data`,
    Object.assign(
      {
        body: JSON.stringify(options.data || {}),
      },
      options,
    ),
  );

export const getTopicList = (teamId: string) =>
  sendRequestAndGetResponse(`${BASE_PATH}/topics/list`, {
    method: 'GET',
    qs: { teamId },
  });

export const getPrivateTopic = (teamId: string, topicSlug: string) =>
  sendRequestAndGetResponse(`${BASE_PATH}/topics/private-topic`, {
    method: 'GET',
    qs: { teamId, topicSlug },
  });

export const getDiscussionList = (params): Promise<{ discussions: Array<any> }> =>
  sendRequestAndGetResponse(`${BASE_PATH}/discussions/list`, {
    method: 'GET',
    qs: params,
  });

export const getTeamList = () =>
  sendRequestAndGetResponse(`${BASE_PATH}/teams`, {
    method: 'GET',
  });

export const addDiscussion = data =>
  sendRequestAndGetResponse(`${BASE_PATH}/discussions/add`, {
    body: JSON.stringify(data),
  });

export const editDiscussion = data =>
  sendRequestAndGetResponse(`${BASE_PATH}/discussions/edit`, {
    body: JSON.stringify(data),
  });

export const deleteDiscussion = data =>
  sendRequestAndGetResponse(`${BASE_PATH}/discussions/delete`, {
    body: JSON.stringify(data),
  });

export const getPostList = (discussionId: string) =>
  sendRequestAndGetResponse(`${BASE_PATH}/posts/list`, {
    method: 'GET',
    qs: { discussionId },
  });

export const addPost = data =>
  sendRequestAndGetResponse(`${BASE_PATH}/posts/add`, {
    body: JSON.stringify(data),
  });

export const editPost = data =>
  sendRequestAndGetResponse(`${BASE_PATH}/posts/edit`, {
    body: JSON.stringify(data),
  });

export const deletePost = data =>
  sendRequestAndGetResponse(`${BASE_PATH}/posts/delete`, {
    body: JSON.stringify(data),
  });

// Uploading file to S3

export const getSignedRequestForUpload = ({ file, prefix, bucket, acl = 'private' }) =>
  sendRequestAndGetResponse(`${BASE_PATH}/aws/get-signed-request-for-upload-to-s3`, {
    method: 'GET',
    qs: { fileName: file.name, fileType: file.type, prefix, bucket, acl },
  });

export const uploadFileUsingSignedPutRequest = (file, signedRequest, headers = {}) =>
  sendRequestAndGetResponse(signedRequest, {
    externalServer: true,
    method: 'PUT',
    body: file,
    headers,
  });

export const getNotificationList = () =>
  sendRequestAndGetResponse(`${BASE_PATH}/notifications/list`, {
    method: 'GET',
  });

export const createNotification = params =>
  sendRequestAndGetResponse(`${BASE_PATH}/notifications/create`, {
    body: JSON.stringify({ params }),
  });

export const deleteNotifications = (ids: string[]) =>
  sendRequestAndGetResponse(`${BASE_PATH}/notifications/bulk-delete`, {
    body: JSON.stringify({ ids }),
  });

export const updateProfile = data =>
  sendRequestAndGetResponse(`${BASE_PATH}/user/update-profile`, {
    body: JSON.stringify(data),
  });