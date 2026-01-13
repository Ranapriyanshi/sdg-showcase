/**
 * Utility functions for LinkedIn post handling
 */

/**
 * Extracts post ID from various LinkedIn URL formats
 * Supports:
 * - https://www.linkedin.com/feed/update/urn:li:activity:1234567890/
 * - https://www.linkedin.com/posts/username_activity-1234567890-abcdef
 * - https://www.linkedin.com/feed/update/1234567890/
 */
export const extractLinkedInPostId = (url) => {
  if (!url) return null;

  // Try to extract from activity-{id} format
  let match = url.match(/activity-(\d+)/);
  if (match) return match[1];

  // Try to extract from urn:li:activity:{id} format
  match = url.match(/urn:li:activity:(\d+)/);
  if (match) return match[1];

  // Try to extract from /feed/update/{id}/ format
  match = url.match(/\/feed\/update\/([^\/\?]+)/);
  if (match) {
    const id = match[1];
    // Remove urn:li:activity: prefix if present
    return id.replace(/^urn:li:activity:/, '');
  }

  // Try to extract from /posts/ format
  match = url.match(/\/posts\/[^\/]+_activity-(\d+)/);
  if (match) return match[1];

  return null;
};

/**
 * Generates LinkedIn embed URL from post ID or URL
 */
export const getLinkedInEmbedUrl = (postIdOrUrl) => {
  const postId = typeof postIdOrUrl === 'string' && postIdOrUrl.includes('linkedin.com')
    ? extractLinkedInPostId(postIdOrUrl)
    : postIdOrUrl;

  if (!postId) return null;

  // LinkedIn embed format
  return `https://www.linkedin.com/embed/feed/update/${postId}`;
};

/**
 * Validates if a URL is a valid LinkedIn post URL
 */
export const isValidLinkedInPostUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  return url.includes('linkedin.com') && (
    url.includes('/feed/update/') ||
    url.includes('/posts/') ||
    url.includes('activity-')
  );
};
