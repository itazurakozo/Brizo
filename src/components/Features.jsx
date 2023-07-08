import React from 'react'

export default function Features () {
  return (
    <div className='features-container'>
      <h1>Features</h1>
      <div>
          <p><strong>K8s Cluster Structure Display:</strong> Brizo automatically generates a visual display of your K8s cluster structure, saving you the effort of tracking your cluster manually in the terminal. Navigate between namespaces with ease to see your deployed Nodes and PODs.</p>
          <p><strong>Compatibility with Multiple Environments:</strong> Brizo is compatible with multiple developer environments, including macOS, Windows, and Linux. Instructions based on your dev environment can be found in the Installation section.</p>
          <p><strong>Security Testing:</strong> Brizo compares your cluster configuration to the CIS security standards, ensuring proper setup for developers. Brizo also offers remediations to address any of the test warnings/failures.</p>
          <p><strong>Autoscale Testing:</strong> Brizo works with Grafana Cloud k6 services to artificially create traffic spikes and monitor your cluster's responsiveness, which helps developers identify potential bottlenecks in their cluster configuration during the development phase.</p>
      </div>
    </div>
  )
}
