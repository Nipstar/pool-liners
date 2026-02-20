"use server"

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    postcode: string;
    service: string;
    poolType?: string;
    message?: string;
    source: string;
    page: string;
}

export interface ContactFormResult {
    success: boolean;
    error?: string;
}

export async function submitContactForm(payload: ContactFormData): Promise<ContactFormResult> {
    try {
        const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
        if (!webhookUrl) {
            throw new Error('Webhook URL not configured');
        }

        const res = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            return { success: false, error: 'Submission failed' };
        }

        return { success: true };
    } catch (error) {
        // Log on the server side (terminal), won't show in browser dev overlay
        console.error('Webhook submission error:', error);
        return { success: false, error: 'Failed to submit form' };
    }
}
