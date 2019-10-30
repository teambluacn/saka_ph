<template>
    <div>
			<sidebar></sidebar>
			<div class="main-panel">
				<topnavbar></topnavbar>
				<div class="content">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-6">
								<div class="card">
									<div class="card-header card-header-success">
										<h4 class="card-title">
										<font-awesome-icon icon="user" style="font-size:12px"/>
										&nbsp; Hulyo Pedro
										</h4>
										<p class="card-category"></p>
									</div>
									<div class="card-body">
										<h6 class="card-category text-gray">
											Tanong:
										</h6>
										<p class="card-description">
											Mga kasaka anu po gamit nio insecticide para sa blackbug?
										</p>

										<h6 class="card-category text-gray">
											Sagot:
										</h6>
										<p class="card-description">
											Ariba 2.5 EC Insecticide
										</p>
									</div>
									<div class="card-footer">
										<p class="stats">
											<font-awesome-icon icon="clock" style="font-size:15px"/>
											&nbsp;
											08/31/2019
										</p>
									</div>
								</div>
							</div>

							<div class="col-md-6">
								<div class="card">
									<div class="card-header card-header-success">
										<h4 class="card-title">
										<font-awesome-icon icon="user" style="font-size:12px"/>
										&nbsp; Sergio Marquina
										</h4>
										<p class="card-category"></p>
									</div>
									<div class="card-body">
										<h6 class="card-category text-gray">
											Tanong:
										</h6>
										<p class="card-description">
											Ano po ang mas ok apply 1 week po ang palay para mabilis lumaki 21-0-0 or 25-0-0?
										</p>

										<h6 class="card-category text-gray">
											Sagot:
										</h6>
										<p class="card-description">
											16-16-8
										</p>
									</div>
									<div class="card-footer">
										<p class="stats">
											<font-awesome-icon icon="clock" style="font-size:15px"/>
											&nbsp;
											08/31/2019
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import sidebar from '@/components/side-navbar.vue'
import topnavbar from '@/components/navbar-top.vue'
export default {
	components: {
		sidebar,
    topnavbar
	}
}
</script>