"use server"

export async function submitContactForm(payload: any) {
    try {
        const res = await fetch('https://antekauto.app.n8n.cloud/webhook/c20f44a3-1bf1-4ea0-9bcc-62875d389a4b', {
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
