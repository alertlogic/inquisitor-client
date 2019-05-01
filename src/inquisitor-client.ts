/**
 * Module to deal with available Ticket Master Public API endpoints
 */
import { ALClient } from '@al/client';

export interface InquisitorRule {
  id?: string;
  name?: string;
  description?: string;
  remediation?: string;
  resolution?: string;
  risk?: string;
  scope?: string;
  ccss_score?: number;
  resolution_type?: string;
  reference?: string;
  pci_concern?: string;
  ccss_vector?: string;
}

export interface InquisitorResponse {
  readonly [index: number]: InquisitorRule[];
}

class InquisitorClient {

  private alClient = ALClient;
  private serviceName = 'inquisitor';

  /**
   * Get Inquisitor rules content
   * GET
   * /inquisitor/v1/rules
   * "https://api.cloudinsight.alertlogic.com/inquisitor/v1/rules"
   */
  async getRules() {
    const rules = await this.alClient.fetch({
      service_name: this.serviceName,
      path: '/rules',
    });
    return rules as InquisitorResponse;
  }

}

export const inquisitorClient = new InquisitorClient();
