import { ref, computed } from 'vue';

interface Mail {
  subject: string;
  body: string;
  sender: string;
  recipient: string;
  id: string;
  isRead: boolean;
  isArchived: boolean;
}

interface MailData {
  value: any[];
}

export function useMailStore() {
  const mails = ref<Mail[]>([]);
  const error = ref<string>('');
  const loading = ref<boolean>(false);

  async function fetchMails() {
    loading.value = true;
    try {
      const { data, execute: refetch } = await useFetch('https://659265b3bb129707198faf38.mockapi.io/api/v1/list/emails');
      if ((data as MailData)?.value?.length) {
        mails.value = (data as MailData).value.map((mail: Mail) => ({
          ...mail,
          isRead: false,
          isArchived: false,
        }));
      }
    } catch (e) {
      error.value = 'Error fetching mails';
    } finally {
      loading.value = false;
    }
  }

  const mailsForInbox = computed(() => {
    return mails.value.filter((mail) => !mail.isArchived);
  });

  const mailsForArchive = computed(() => {
    return mails.value.filter((mail) => mail.isArchived);
  });

  const totalMailsInInbox = computed(() => {
    return mails.value.filter((mail) => !mail.isArchived).length;
  });

  const markEmailsAsRead = (ids: [string]) => {
    if (ids?.length) {
      mails.value = mails.value.map((mail) => {
        if (ids.includes(mail.id.toString())) {
          mail.isRead = true;
        }
        return mail;
      });
    }
  };

  const markEmailsAsArchive = (ids: [string]) => {
    if (ids?.length) {
      mails.value = mails.value.map((mail) => {
        if (ids.includes(mail.id.toString())) {
          mail.isArchived = true;
        }
        return mail;
      });
    }
  };

  return {
    mails,
    error,
    loading,
    fetchMails,
    markEmailsAsRead,
    markEmailsAsArchive,
    mailsForInbox,
    totalMailsInInbox,
    mailsForArchive,
  };
}
